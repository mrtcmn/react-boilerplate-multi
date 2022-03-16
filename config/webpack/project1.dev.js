const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return merge(commonConfig, {
    context: resolve(__dirname, '../../project/project/'),
    mode: 'development',
    entry: [
      'react-hot-loader/patch', // activate HMR for React
      'webpack-dev-server/client?http://localhost:9092', // bundle the client for webpack-dev-server and connect to the provided endpoint
      'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
      './index.js', // the entry point of our app
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true,
    },
    output: {
      filename: 'js/bundle.[hash].min.js',
      publicPath: 'http://localhost:9092/',
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // enable HMR globally
      new webpack.NamedModulesPlugin(),
      new Dotenv({
        path: resolve(__dirname, '../environment/project1.dev.env'),
      }),
      new HtmlWebpackPlugin({ template: 'entryPages/project1_index.html.ejs' }),
    ],
    externals: {
      react: 'React',
    },
  });
};
