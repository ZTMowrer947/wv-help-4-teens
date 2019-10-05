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
app.use(
    views(path.resolve(__dirname, "..", "views"), {
        extension: "pug",
    })
);
app.use(mount("/public", serveStatic(path.resolve(__dirname, "..", "public"))));

app.use(async ctx => {
    await ctx.render("index");
});

// Export
export default app;
