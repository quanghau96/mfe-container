const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '..', 'build'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        frieza: 'frieza@http://localhost:8081/remoteEntry.js',
        frozen: 'frozen@http://localhost:8083/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
