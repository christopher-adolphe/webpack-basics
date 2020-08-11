const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('../../config/webpack.dev');

// Creating an Express application
const server = express();

// Using webpack to create a compiler from our webpack configs
const compiler = webpack(config);

// Setting up the webpackDevMiddleware using the compiler & the devServer property of our webpack config
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);

// Setting up the webpackHotMiddleware using the compiler
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

// Telling the Express application to use the webpackDevMiddleware
server.use(webpackDevMiddleware);

// Tellig the Express application to use the webpackHotMiddleware
server.use(webpackHotMiddleware);

// Defining a middleware that takes the route of the web server
const staticMiddleware = express.static('dist');

// Telling the Express application to use the web server route
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log('Server listening on port 8080!')
});