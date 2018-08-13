const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", `${Path.join(__dirname, "src")}/index.jsx`],

  output: {
    path: Path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      public: Path.resolve(__dirname, "./public/"),
      components: Path.resolve(__dirname, "./src/components/"),
      ui: Path.resolve(__dirname, "./src/ui/"),
      actions: Path.resolve(__dirname, "./src/actions/"),
      reducers: Path.resolve(__dirname, "./src/reducers/"),
      sagas: Path.resolve(__dirname, "./src/sagas/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, "src"),
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        include: Path.resolve(__dirname, "public"),
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: Path.resolve(__dirname, "public"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["build"])]
};
