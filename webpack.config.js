// Imports
const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");

// Base path
const basePath = path.resolve(__dirname);
const sourcePath = path.resolve(__dirname, "src", "client");

// Environment
const environment = process.env.NODE_ENV === "production" ? "prod" : "dev";

// Plugins
const plugins = [
    new AssetsPlugin({
        keepInMemory: environment === "dev",
        filename: "assets.json",
        useCompilerPath: true,
    }),
];

// Configuration
/**
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    // Mode
    mode: environment === "prod" ? "production" : "development",

    // Entry point
    entry: [path.resolve(sourcePath, "index.ts")],

    // Output
    output: {
        // Filenames
        filename: path.join(
            "scripts",
            environment === "prod"
                ? "[name].[contenthash].js"
                : "[name].bundle.js"
        ),

        // Path
        path: path.resolve(basePath, "public"),

        // Public path
        publicPath: "/public",
    },

    // Devtool
    devtool: environment === "prod" ? "source-map" : "cheap-module-source-map",

    // Module Rules
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },

    // Plugins
    plugins,

    // Optimizations
    optimization: {
        // Module IDs
        moduleIds: environment === "prod" ? "hashed" : "named",

        // Split runtime code into its own chunk
        runtimeChunk: "single",

        // Split all chunks
        splitChunks: {
            // Group caching
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};

// Export
module.exports = webpackConfig;
