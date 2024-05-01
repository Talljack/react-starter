import createEslintConfig from 'talljack-eslint-config'

export default createEslintConfig({
  react: true,
  typescript: true,
  formatters: true,
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'ts/ban-ts-comment': 'warn',
  },
})
