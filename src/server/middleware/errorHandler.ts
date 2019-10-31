// Imports
import { STATUS_CODES } from "http";
import { Middleware } from "koa";
import env, { EnvironmentType } from "../../env";

// Error handling middleware
const errorHandler: Middleware = async (ctx, next) => {
    try {
        // Process rest of middleware chain
        await next();
    } catch (error) {
        // If an error is thrown,

        // If the status has not been set to an error status,
        if (ctx.status < 400 || ctx.status > 599) {
            // Set status to 500
            ctx.status = 500;
        }

        // Set state for error view
        ctx.state = {
            ...ctx.state,
            status: ctx.status,
            statusText: STATUS_CODES[ctx.status],
            error,
            isDev: env === EnvironmentType.Development,
        };

        // Render error view
        await ctx.render("error");

        // Emit error event on main app
        ctx.app.emit("error", error, ctx);
    }
};

// Export
export default errorHandler;
