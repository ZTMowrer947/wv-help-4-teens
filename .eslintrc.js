// ESLint Configuration
module.exports = {
    // Parser
    parser: "@typescript-eslint/parser",

    // Plugins
    plugins: ["@typescript-eslint", "prettier"],

    // Ruleset extensions
    extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],

    // Environment
    env: {
        node: true,
        es6: true,
    },

    // Rules
    rules: {
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],

        "import/order": ["error"],
    },
};
