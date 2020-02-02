const path = require('path');

const common = require('../../config/webpack/webpack.config');

const config = {
  dir: path.resolve(__dirname, 'src'),
  title: 'Eldo',
  mode: 'PROD',
};

module.exports = common(config);
