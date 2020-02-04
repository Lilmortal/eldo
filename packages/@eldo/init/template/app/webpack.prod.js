const path = require('path');

const webpack = require('@eldo/webpack');

const conf = webpack({
  dir: path.resolve(__dirname),
  title: '<%= projectName %>',
  mode: 'PROD',
});

module.exports = conf({});
