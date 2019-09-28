// Imports
import path from "path";
import Koa from "koa";
import logger from "koa-logger";
import mount from "koa-mount";
import serveStatic from "koa-static";
import views from "koa-views";

// App setup
const app = new Koa();

// Middleware
app.use(logger());
app.use(mount("/public", serveStatic(path.resolve("..", "public"))));
app.use(
    views(path.resolve("..", "views"), {
        extension: "pug",
    })
);

// Export
export default app;
