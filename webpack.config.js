<<<<<<< HEAD
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
=======
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
>>>>>>> 21766160992a6645f7c083a1ed5f72f728623d48

module.exports = {
  entry: './src/main.js',
  output: {
<<<<<<< HEAD
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
=======
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true
>>>>>>> 21766160992a6645f7c083a1ed5f72f728623d48
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
};