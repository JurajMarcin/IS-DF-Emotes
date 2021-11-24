const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'content_script': './src/content_script.ts',
    'options': './src/options.ts',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/css/*', to: './css/[name][ext]' },
        { from: './src/options.html', to: './options.html' },
        { from: './assets/*' }
      ],
    }),
  ],
};
