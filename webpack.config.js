const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
});

const HMR = new webpack.HotModuleReplacementPlugin()

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [htmlPlugin, HMR]
};

