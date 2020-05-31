module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  env: {
    "es6": true,
    'jest': true,
  },
  rules: {
    'arrow-parens': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prefer-stateless-function': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'quotes': "error",
    'max-len': [
      'error', {
        'code': 120
      }]
  },
  globals: {
    'fetch': false
  }
};
