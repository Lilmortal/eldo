const path = require('path');
// const { lstatSync, readdirSync } = require('fs');

// const basePath = path.resolve(__dirname, '../', 'packages');
// const packages = readdirSync(basePath).filter((name) =>
//   lstatSync(path.join(basePath, name)).isDirectory(),
// );

// console.log(
//   packages.reduce(
//     (acc, name) => ({
//       ...acc,
//       [`@eldo/${name}`]: path.join(basePath, name, 'ui'),
//     }),
//     {},
//   ),
// );
module.exports = {
  stories: ['../packages/**/*.stories.tsx', '../web/app/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader'),
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // Object.assign(config.resolve.alias, {
    //   ...packages.reduce(
    //     (acc, name) => ({
    //       ...acc,
    //       [`@eldo/${name}`]: path.join(basePath, name, 'ui'),
    //     }),
    //     {},
    //   ),
    // });

    return config;
  },
};
