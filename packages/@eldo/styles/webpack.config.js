const path = require('path');

const webpack = require('@eldo/webpack');

const conf = webpack({
  dir: path.resolve(__dirname),
  entryApp: 'index.css',
  isApp: false,
  isProd: true,
});

module.exports = conf({});