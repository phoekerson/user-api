const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            globals: {
                require: "readonly",
                module: "readonly",
                exports: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                process: "readonly",
                console: "readonly",
            }
        },
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "single"],
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    },
    {
        ignores: ["node_modules/", "coverage/"]
    }
];