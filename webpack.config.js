const path = require("path")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "assets/scripts/src", "index.js"),
    output: {
        path: path.resolve(__dirname, "assets/scripts/dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "layouts", "index.html"),
        }),
    ],
    watch: true
}