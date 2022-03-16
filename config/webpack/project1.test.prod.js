// production config
const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./common');
const GetEnv = require('../../utils/env.util');

module.exports = () => {
  return merge(commonConfig, {
    context: resolve(__dirname, '../../project/project/'),
    plugins: [
      new Dotenv({
        path: resolve(
          __dirname,
          '../environment/project1.test.prod.env'
        ),
      }),
      //new CompressionPlugin({
      //  filename: '[path].gz[query]',
      //  algorithm: 'gzip',
      //  test: /\.(js|css|html|svg|woff|png|jpeg|jpg)$/,
      //  threshold: 8192,
      //  minRatio: 0.8,
      //}),
      //new BrotliPlugin({
      //  asset: '[path].br[query]',
      //  test: /\.(js|css|html|svg)$/,
      //  threshold: 10240,
      //  minRatio: 0.8,
      //}),
      new HtmlWebpackPlugin({
        template: 'entryPages/project1_index.html.ejs',
      }),
    ],
    mode: 'production',
    entry: './index.js',
    devtool: false,
    output: {
      filename: 'js/bundle.[hash].min.js',
      path: resolve(__dirname, '../../dist/psf'),
      publicPath: (GetEnv && GetEnv.ASSET_PATH) || '/',
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  });
};
