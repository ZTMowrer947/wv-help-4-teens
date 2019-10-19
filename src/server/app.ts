// Imports
import path from "path";
import Koa from "koa";
import logger from "koa-logger";
import mount from "koa-mount";
import serveStatic from "koa-static";
import views from "koa-views";
import env, { EnvironmentType } from "../env";
import router from "./routes";

// App setup
const app = new Koa();

// Base path
const rootPath = path.resolve(__dirname, "..", "..");

// Middleware
(async () => {
    // Log out requests to this server
    app.use(logger());

    // Enable template engine functionality
    app.use(
        views(path.resolve(rootPath, "views"), {
            // Default to using Pug for templates
            extension: "pug",
        })
    );

    // If the environment is in development mode,
    if (env === EnvironmentType.Development) {
        // Import webpack packages
        const { default: koaWebpack } = await import("koa-webpack");
        const { default: webpack } = await import("webpack");
        const { default: webpackConfig } = await import("../../webpack.config");

        // Configure webpack compiler
        const compiler = webpack(webpackConfig);

        // Setup middleware
        const middleware = await koaWebpack({ compiler });

        // Apply middleware
        app.use(middleware);

        // Read asset data
        app.use(async (ctx, next) => {
            // Set path to asset file
            const assetPath = path.resolve(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                webpackConfig.output!.path!,
                "assets.json"
            );

            // Read and parse asset file
            const assets = JSON.parse(
                middleware.devMiddleware.fileSystem
                    .readFileSync(assetPath)
                    .toString()
            );

            // Attach assets to context state
            ctx.state = assets;

            // Continue middleware chain
            await next();
        });
    } else {
        // Serve static assets from /public
        app.use(
            mount("/public", serveStatic(path.resolve(rootPath, "public")))
        );
    }

    app.use(async (ctx, next) => {
        // Get asset data from context state
        const assets = ctx.state;

        // Get and reorganize asset chunk names
        let assetChunks = Object.keys(assets);
        assetChunks = [...assetChunks.slice(1), assetChunks[0]];

        const organizedAssets = assetChunks.map(chunk => assets[chunk]);

        // Get script and style paths
        const scripts = organizedAssets
            .filter(asset => asset.js)
            .map(asset => asset.js);

        const scriptHashes = organizedAssets
            .filter(asset => asset.jsIntegrity)
            .map(asset => asset.jsIntegrity);

        const styles = organizedAssets
            .filter(asset => asset.css)
            .map(asset => asset.css);

        const styleHashes = organizedAssets
            .filter(asset => asset.cssIntegrity)
            .map(asset => asset.cssIntegrity);

        // Attach paths to context state
        ctx.state = {
            scripts,
            scriptHashes,
            styles,
            styleHashes,
        };

        // Continue middleware chain
        await next();
    });

    // Routes
    app.use(router.routes());
    app.use(router.allowedMethods());
})();

// Export
export default app;
