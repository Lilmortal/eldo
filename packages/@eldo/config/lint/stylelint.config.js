module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-a11y/recommended',
  ],
  rules: {
    'declaration-block-trailing-semicolon': 'always',
    'selector-nested-pattern': '^&',
    'a11y/font-size-is-readable': true,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'define-mixin', 'mixin-content'] },
    ],
  },
};
