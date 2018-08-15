// Libraries
const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Config
const publicUrl = '/';
const publicDir = 'public';
const buildPath = 'build';
const bundle = 'bundle.js';

// Webpack cfg
module.exports = {
  entry: ['babel-polyfill', `${Path.join(__dirname, 'src')}/index.jsx`],
  output: {
    publicPath: publicUrl,
    path: Path.join(__dirname, buildPath),
    filename: bundle,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      public: Path.resolve(__dirname, `./${publicDir}/`),
      components: Path.resolve(__dirname, './src/components/'),
      ui: Path.resolve(__dirname, './src/ui/'),
      actions: Path.resolve(__dirname, './src/actions/'),
      reducers: Path.resolve(__dirname, './src/reducers/'),
      sagas: Path.resolve(__dirname, './src/sagas/'),
    },
  },
  plugins: [new CleanWebpackPlugin([buildPath])],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, 'src'),
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        include: Path.resolve(__dirname, publicDir),
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: Path.resolve(__dirname, publicDir),
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
    ],
  },
};
