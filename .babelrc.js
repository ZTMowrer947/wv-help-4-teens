module.exports = api => {
    // Determine if we are in a development/testing environment
    const isDev = api.env(["development", "dev", "test", "testing", "staging"]);

    // Define presets
    const presets = [
        // Environment
        [
            "@babel/preset-env",
            {
                // Use builtins based on usage
                useBuiltIns: "usage",

                // Target
                targets: {
                    // Target current nodejs version
                    node: "current",
                },

                // Use core-js 3
                corejs: 3,
            },
        ],

        // TypeScript
        "@babel/preset-typescript",
    ];

    // Define plugins
    const plugins = [
        // Class properties
        "@babel/plugin-proposal-class-properties",

        // Transform TypeScript metadata
        "babel-plugin-transform-typescript-metadata",
    ];

    // If not in production, transform babel runtime
    if (isDev) plugins.push("@babel/transform-runtime");

    // Return configuration object
    return {
        presets,
        plugins,
    };
};
