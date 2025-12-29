const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { InjectManifest } = require('workbox-webpack-plugin');
require('dotenv').config({ path: './.env' });

const isAnalyze = process.env.ANALYZE === 'true';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
    chunkFilename: isProd ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-react'
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][hash][ext]' }
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimize: isProd,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
        REACT_APP_PUBLIC_SITE_URL: process.env.REACT_APP_PUBLIC_SITE_URL,
        REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
        REACT_APP_ANALYTICS_DOMAIN: process.env.REACT_APP_ANALYTICS_DOMAIN,
        REACT_APP_SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
      })
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      minify: isProd ? {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      } : false,
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
    ...(isProd ? [
      new InjectManifest({ 
        swSrc: './src/sw.js', 
        swDest: 'sw.js',
        exclude: [/\.map$/, /^manifest.*\.js$/]
      })
    ] : []),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'three-mesh-bvh': false,
    },
  },
  performance: {
    hints: isProd ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all',
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
};