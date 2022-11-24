module.exports = {
  env: {
    browser: true,
    es2021: true,
    Node: true,
  },
  extends: ['plugin:react/recommended', 'standard'],

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "semi": "off",
  },
};
