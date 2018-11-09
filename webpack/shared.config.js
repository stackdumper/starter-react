const path = require('path')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BarPlugin = require('webpackbar')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'starter-react-js',
      template: path.resolve(__dirname, '../templates/index.html'),
    }),
    new BarPlugin(),
  ],
}
