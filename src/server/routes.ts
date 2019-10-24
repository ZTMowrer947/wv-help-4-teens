// Imports
import { ParameterizedContext } from "koa";
import Router, { RouterContext } from "koa-router";
import BaseState from "./models/BaseState";
import TopicService from "./services/TopicService";
import TopicState from "./models/TopicState";

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

// GET /topics/:id: Topic page
router.get(
    "/topics/:id",
    async (
        ctx: ParameterizedContext<TopicState, RouterContext<TopicState>>,
        next
    ) => {
        const topic = await ctx.state.topicService.getTopicById(ctx.params.id);

        if (topic) {
            // Attach topic to context state
            ctx.state.topic = topic;

            // Continue middleware chain
            await next();
        }
    },
    async (ctx: ParameterizedContext<TopicState>) => {
        // Render topic page
        await ctx.render("topic");
    }
);

// Export
export default router;
