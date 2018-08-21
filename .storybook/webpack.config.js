const Path = require('path');
const common = require('../webpack.common.js');

const publicDir = 'public';

module.exports = {
  resolve: {
    extensions: common.resolve.extensions,
    alias: {
      public: Path.resolve(__dirname, `../${publicDir}/`),
      src: Path.resolve(__dirname, `../src/`),
      components: Path.resolve(__dirname, '../src/components/'),
      ui: Path.resolve(__dirname, '../src/ui/'),
      actions: Path.resolve(__dirname, '../src/actions/'),
      reducers: Path.resolve(__dirname, '../src/reducers/'),
      sagas: Path.resolve(__dirname, '../src/sagas/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader', 'img-loader'],
        include: Path.resolve(__dirname, `../`)
      }
    ],
  },
};
