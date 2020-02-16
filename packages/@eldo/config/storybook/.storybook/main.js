const path = require("path");
const gitRoot = require("git-root");

const PACKAGE_DIR = `${gitRoot()}/packages/@eldo`;
const APP_DIR = `${gitRoot()}/web`;

module.exports = {
  stories: [`${PACKAGE_DIR}/**/*.stories.tsx`, `${APP_DIR}/**/*.stories.tsx`],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("awesome-typescript-loader"),
    });
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.s[a|c]ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            config: {
              path: `./postcss.config.js`,
            },
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: { implementation: require("sass"), sourceMap: true },
        },
      ],
    });

    return config;
  },
};
