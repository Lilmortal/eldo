const path = require('path');

const webpack = require('@eldo/webpack');

const conf = webpack({
  dir: path.resolve(__dirname),
  title: 'Eldo',
  isApp: true,
  isProd: false,
});

module.exports = conf({});
