const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve, rules, plugins } = require('./webpack.common');

module.exports = {
  mode: 'production',
  entry: {
    vendors: [
      'babel-polyfill',
      'react',
      'react-dom',
    ],
    app: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash:6].min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64:6]',
          },
        }],
      },
    ],
  },
  plugins: [
    ...plugins,
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:6].min.css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve,
};
