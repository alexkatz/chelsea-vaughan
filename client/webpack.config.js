const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

const config = env => ({
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/dist'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      title: 'Chelsea Vaughan',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    }),
    new HtmlWebpackRootPlugin(),
    ...(env === 'production' ? [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ] : []),
    new CopyWebpackPlugin([
      { from: 'src/assets/image', to: 'image' }
    ]),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname + '/src')],
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        include: [path.resolve(__dirname + '/src')],
        loader: 'url-loader?limit=50000&name=[name].[ext]',
      },
    ],
  },
});

module.exports = config;