const path = require('path');

const common = require('../../config/webpack/webpack.config');

const config = {
  dir: path.resolve(__dirname, 'src'),
  publishDir: path.resolve(__dirname),
  title: 'Eldo',
  mode: 'DEV',
};

module.exports = common(config);
