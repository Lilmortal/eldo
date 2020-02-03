const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.tsx', '../web/app/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
