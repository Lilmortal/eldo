const merge = require('webpack-merge');

const common = require('./webpack.common');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

// type can be 'component' or 'app'
module.exports = ({
  dir,
  publishDir = dir,
  type = 'app',
  title,
  mode = 'DEV',
}) => (config) => {
  return merge(
    common({ dir, type, title }),
    mode === 'DEV' ? dev({ dir: publishDir }) : prod({ dir: publishDir }),
    config,
  );
};
