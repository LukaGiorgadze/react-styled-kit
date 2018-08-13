const merge = require("webpack-merge");
const Path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");

const publicPath = process.env.BASENAME || "/";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: Path.join(__dirname, "public", "index.html"),
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: Path.resolve(__dirname, "build"),
    compress: true,
    publicPath,
    historyApiFallback: true,
    port: 8080
  }
});
