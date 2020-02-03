const path = require("path");

// const button = require("@eldo/button");

module.exports = {
  stories: [
    `../../../../packages/**/*.stories.tsx`,
    `../../../../web/app/**/*.stories.tsx`,
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("awesome-typescript-loader"),
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
