const path = require("path");
const gitRoot = require("git-root");

const PACKAGE_DIR = `${gitRoot()}/packages/@eldo`;
const APP_DIR = `${gitRoot()}/web`;

module.exports = {
  stories: [`${PACKAGE_DIR}/**/*.stories.tsx`, `${APP_DIR}/**/*.stories.tsx`],
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
