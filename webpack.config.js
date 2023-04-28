const path = require("path");


module.exports = {
    mode: "production",
    entry: "./dist/main.js",
    output: {
        // filename: "[contenthash]bundle.js",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist"
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}