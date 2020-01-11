// Imports
import http from "http";
import app from "./app";

// HTTP Server setup
const server = http.createServer(app.callback());

// Get port to listen on
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

// Listen on given port
server.listen(port);

// Server listening handler
server.once("listening", () => {
    console.log(`Koa server now running on port ${port}...`);
});
