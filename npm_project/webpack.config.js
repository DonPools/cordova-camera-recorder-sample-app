const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[name].[contenthash].js",
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      inject: true
    }),
  ],

  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
