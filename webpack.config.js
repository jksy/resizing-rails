const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  mode: 'development',
  entry: './app/javascript/packs/resizing.js',
  output: {
    filename: 'resizing.bundle.js',
    path: path.join(__dirname, './app/javascript/dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackManifestPlugin({
      writeToFileEmit: true
    })
  ],
  module: {
  },
  devServer: {
    host: '0.0.0.0',
    port: 3035,
    publicPath: 'http://localhost:3035/frontend/public/assets',
    contentBase: path.resolve(__dirname, './frontend/public/assets'),
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
};
