const merge = require('webpack-merge');

const common = require('./webpack.common');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

module.exports = ({ dir, publishDir = dir, title, mode = 'DEV' }) => {
  return merge(
    common({ dir, title }),
    mode === 'DEV' ? dev(publishDir) : prod(publishDir),
  );
};
