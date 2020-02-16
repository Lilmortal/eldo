module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-a11y/recommended',
  ],
  rules: {
    'declaration-block-trailing-semicolon': 'always',
    'selector-nested-pattern': '^&',
    'a11y/font-size-is-readable': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'a11y/media-prefers-reduced-motion': [
      true,
      {
        message: `Expected @enableMotion mixin for all animation related code.`,
      },
    ],
  },
};
