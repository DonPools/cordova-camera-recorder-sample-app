'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require("path");
const Webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const {
  choosePort,
  prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8000;
const HOST = process.env.HOST || '0.0.0.0';

choosePort(HOST, DEFAULT_PORT).then(port => {
  if (port == null) {
    return;
  }

  const compiler = Webpack(webpackConfig);
  const WebpackDevServer = require('webpack-dev-server/lib/Server');
  const server = new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: true,
    historyApiFallback: true,
  });

  server.listen(port, HOST, err => {
    if (err) {
      return console.log(err);
    }

    const urls = prepareUrls("http", HOST, port);
    openBrowser(urls.localUrlForBrowser);
  });

})