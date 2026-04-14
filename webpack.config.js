const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

const filteredRules = defaultConfig.module.rules.filter(
    (rule) => !rule.test?.toString().includes("svg")
);

module.exports = {
    ...defaultConfig,
    entry: {
        "editor-script": path.resolve(__dirname, "src/js/editor.js"),
        "frontend-script": path.resolve(__dirname, "src/js/frontend.js"),
        "editor-style": path.resolve(__dirname, "src/css/editor.scss"),
        "frontend-style": path.resolve(__dirname, "src/css/frontend.scss"),
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            ...filteredRules,
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: { icon: true },
                    },
                ],
            },
        ],
    },
};
