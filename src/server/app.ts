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
const rootPath =
    env === EnvironmentType.Production
        ? path.resolve(__dirname, "..")
        : path.resolve(__dirname, "..", "..");

// Middleware

// Log out requests to this server
app.use(logger());

// Enable template engine functionality
app.use(
    views(path.resolve(rootPath, "views"), {
        // Default to using Pug for templates
        extension: "pug",
    })
);

// Serve static assets from /public
app.use(mount("/public", serveStatic(path.resolve(rootPath, "public"))));

// Routes
app.use(router.routes());
app.use(router.allowedMethods());

// Export
export default app;
