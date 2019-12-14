// Imports
import path from "path";
import Koa from "koa";
import helmet from "koa-helmet";
import logger from "koa-logger";
import mount from "koa-mount";
import serveStatic from "koa-static";
import views from "koa-views";
import env, { EnvironmentType } from "../env";
import errorHandler from "./middleware/errorHandler";
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

    // Handle errors
    app.use(errorHandler);

    // Helmet security measures
    app.use(
        helmet({
            // Disable HSTS
            hsts: false,

            // Set Content Security Policy only in production
            contentSecurityPolicy:
                env === EnvironmentType.Production
                    ? {
                          directives: {
                              // By default, only allow assets from inside the site and those requested via HTTPS
                              defaultSrc: ["'self'", "https:"],

                              // Block any object item
                              objectSrc: ["'none'"],

                              // Require SRI for scripts and styles
                              requireSriFor: ["script", "style"],
                          },
                      }
                    : false,

            // Referer policy
            referrerPolicy: {
                // Set policy to same-origin
                policy: "same-origin",
            },
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
        // Import fs module
        const { default: fs } = await import("fs");

        // Serve static assets from /public
        app.use(
            mount("/public", serveStatic(path.resolve(rootPath, "dist", "client")))
        );

        // Read assets file from public folder
        app.use(async (ctx, next) => {
            // Set path to asset file
            const assetPath = path.resolve(rootPath, "dist", "client", "assets.json");

            // Read and parse asset file
            const assets = JSON.parse(fs.readFileSync(assetPath).toString());

            // Attach assets to context state
            ctx.state = assets;

            // Continue middleware chain
            await next();
        });
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

    // Global error handler
    app.on("error", (error: Error) => {
        // Log error stack trace
        console.log(error.stack);
    });
})();

// Export
export default app;
