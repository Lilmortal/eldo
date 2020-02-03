const path = require('path');

const webpack = require('@eldo/webpack');

const conf = webpack({
  dir: path.resolve(__dirname),
  title: 'Eldo',
  type: 'component',
  mode: 'PROD',
});

module.exports = conf({});
