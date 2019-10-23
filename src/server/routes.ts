// Imports
import { ParameterizedContext } from "koa";
import Router from "koa-router";
import BaseState from "./models/BaseState";
import TopicService from "./services/TopicService";

// Router setup
const router = new Router();

// Middleware
router.use(async (ctx: ParameterizedContext<BaseState>, next) => {
    // Initialize topic service
    ctx.state.topicService = new TopicService();

    // Get topic listing
    ctx.state.topics = await ctx.state.topicService.getTopics();

    // Continue middleware chain
    await next();
});

// Routes
// GET /: Home page
router.get("/", async (ctx: ParameterizedContext<BaseState>) => {
    // Render home page
    await ctx.render("index");
});

// Export
export default router;
