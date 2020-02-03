module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  // parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['airbnb-typescript-prettier'],
  // parserOptions: {
  //   ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  //   sourceType: 'module', // Allows for the use of imports
  //   ecmaFeatures: {
  //     jsx: true, // Allows for the parsing of JSX
  //   },
  // },
  // settings: {
  //   react: {
  //     version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
  //   },
  // },
  // rules: {
  //   'react/prop-types': 'off',
  //   'no-console': ['warn'],
  //   'import/no-extraneous-dependencies': ['error'],
  // },
  // overrides: [
  //   {
  //     files: ['*.{test,spec,story}.ts{,x}'],
  //     rules: {
  //       'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
  //     },
  //   },
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     parser: '@typescript-eslint/parser',
  //     extends: ['plugin:@typescript-eslint/recommended'],
  //     rules: {
  //       '@typescript-eslint/no-unused-vars': 'error',
  //       '@typescript-eslint/explicit-function-return-type': 'error',
  //     },
  //   },
  //   {
  //     files: ['*.js'],
  //     rules: {
  //       '@typescript-eslint/no-var-requires': 'off',
  //       '@typescript-eslint/explicit-function-return-type': 'off',
  //     },
  //   },
  // ],
};
