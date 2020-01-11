// Imports
const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractCSSChunksWebpackPlugin = require("extract-css-chunks-webpack-plugin");
const SriPlugin = require("webpack-subresource-integrity");

// Base path
const basePath = path.resolve(__dirname);
const sourcePath = path.resolve(__dirname, "src", "client");

// Environment
const environment = process.env.NODE_ENV === "production" ? "prod" : "dev";

// Plugins
const plugins = [
    new ExtractCSSChunksWebpackPlugin({
        filename: path.join(
            "styles",
            environment === "prod"
                ? "[name].[contenthash].css"
                : "[name].bundle.css"
        ),

        chunkFilenames: path.join(
            "styles",
            environment === "prod"
                ? "[id].[contenthash].css"
                : "[id].bundle.css"
        ),
    }),

    new AssetsPlugin({
        keepInMemory: environment === "dev",
        filename: "assets.json",
        useCompilerPath: true,
        integrity: environment === "prod",
    }),

    new SriPlugin({
        hashFuncNames: ["sha256", "sha384"],
        enabled: environment === "prod",
    }),
];

if (environment === "dev") {
    plugins.push(
        new CopyPlugin([
            {
                from: path.resolve(basePath, "src", "images"),
                to: path.resolve(basePath, "dist", "client", "images"),
            },
        ])
    );
}

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
        path: path.resolve(basePath, "dist", "client"),

        // Public path
        publicPath: "/public",

        crossOriginLoading: environment === "prod" && "anonymous",
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
                test: /\.s(a|c)ss?$/,
                use: [
                    {
                        loader: ExtractCSSChunksWebpackPlugin.loader,
                        options: {
                            hot: environment === "dev",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    "resolve-url-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
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

    resolveLoader: {
        modules: [path.resolve(__dirname, "node_modules")],
    },
};

// Export
module.exports = webpackConfig;
