const path = require('path');

const webpack = require('@eldo/webpack');

const conf = webpack({
  dir: path.resolve(__dirname, 'src'),
  publishDir: path.resolve(__dirname),
  title: 'Eldo',
  mode: 'DEV',
});

module.exports = conf({});
