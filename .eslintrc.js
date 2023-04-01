module.exports = {
  extends: ['@antfu/eslint-config-react', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
