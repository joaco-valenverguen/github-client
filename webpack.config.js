const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
