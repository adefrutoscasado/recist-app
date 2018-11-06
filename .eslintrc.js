module.exports = {
  extends: 'eslint-config-airbnb-es5',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 0,
    semi: [2, 'always'],
    'object-curly-spacing': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'func-names': ['error', 'never'],
    'prefer-arrow-callback': 0
  },
  plugins: ['html']
};
