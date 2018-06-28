const path = require('path');
// const webpack = require('webpack');
// const convert = require('koa-connect');
// const proxy = require('http-proxy-middleware');

const { resolve, rules, plugins } = require('./webpack.common');

module.exports = {
  plugins,
  resolve,
  mode: 'development',
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
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
};

// // proxy local Express API requests
// module.exports.serve = {
//   content: [__dirname],
//   add: (app) => {
//     app.use(convert(proxy('/some-end-point', { target: 'http://localhost:3000' })));
//   },
// };
