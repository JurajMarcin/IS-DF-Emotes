const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('../webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './manifest_chrome.json', to: './manifest.json' },
      ],
    }),
  ],
  output: { filename: '[name].js', path: path.resolve(__dirname, '../../dist/chrome/') },
});
