module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  rules: {
    'declaration-block-trailing-semicolon': 'always',
    'selector-nested-pattern': '^&',
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'define-mixin', 'mixin-content'] },
    ],
  },
};
