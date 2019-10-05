// Imports
import Router from "koa-router";

// Router setup
const router = new Router();

// Routes
// GET /: Home page
router.get("/", async ctx => {
    // Render home page
    await ctx.render("index");
});

// Export
export default router;
