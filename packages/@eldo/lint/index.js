module.exports = {
  compilerOptions: {
    composite: true,
    noEmit: true,
    strict: true,
    jsx: 'react',
    target: 'esnext',
    module: 'esnext',
    moduleResolution: 'node',
    esModuleInterop: true,
    removeComments: true,
    declarationMap: true,
  },
  awesomeTypescriptLoaderOptions: {
    useBabel: true,
    babelCore: '@babel/core',
  },
};
