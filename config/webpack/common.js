// shared config (dev and prod)
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isMobileApp = !(
  process.env.PROJECT === 'PROJECT1' ||
  process.env.PROJECT === 'PROJECT2'
);
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@f': resolve(__dirname, '../../project/project'),
      '@mobile': resolve(__dirname, '../../project/mobile'),
      '@service': resolve(__dirname, '../../service'),
      '@asset': resolve(__dirname, '../../asset'),
      '@SComponent': resolve(__dirname, '../../component'),
      '@utils': resolve(__dirname, '../../utils'),
      ...(isMobileApp
        ? { '@envFile': resolve(__dirname, '../../utils/env.util.rn') }
        : { '@envFile': resolve(__dirname, '../../utils/env.util') }),
      '@root': resolve(__dirname, '../../'),
    },
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './siteConfig' },
        { from: './errorPages' },
        { from: '../../asset/images/logos' },
      ],
    }),
  ],
  performance: {
    hints: false,
  },
};
