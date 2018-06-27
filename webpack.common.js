const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: [/node_modules/, /routes/, /lib/, /bin/],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
        plugins: [
          'transform-object-rest-spread',
          'transform-react-jsx',
        ],
      },
    },
  }, {
    test: /\.(png|jpg|gif|svg|ttf)$/,
    use: {
      loader: 'file-loader',
      options: { name: '[name].[ext]' },
    },
  }],
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'public/index.html'),
      alwaysWriteToDisk: true,
      title: '',
      root: 'root',
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
