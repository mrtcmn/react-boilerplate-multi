module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'eslint-config-airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'jest', 'prettier', 'compat', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'compat/compat': 1,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: false,
        semi: true,
        endOfLine: 'crlf',
      },
    ],
    'no-var': 2,
    'no-const-assign': 'error',
    'react/no-typos': 'off',
    radix: 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    eqeqeq: ['error', 'always'],
    semi: [0, 'always'],
    'default-case': 0,
    'template-curly-spacing': 0, // Prettier.
    'arrow-parens': 0, // Does not work with Flow generic types
    'consistent-return': 0, // Flow.
    // Prefer new line before return
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'error',
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-return-await': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'import/first': 0,
    'no-restricted-globals': 1,
    'no-useless-escape': 1,
    //was not working when used with flow prop types
    'no-unused-vars': 1,
    // require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: ['error', 'never', { exceptRange: true }],
    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,
    camelcase: 0,
    // no longer defined
    'jsx-a11y/href-no-hash': 'off',

    'global-require': 0, // Used by webpack isomorphic tools and React Native.
    'no-console': 0, // we are enabling this in the scripts
    'no-debugger': 0, // we are enabling this in the scripts
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    // React control override.
    'react/display-name': 0,
    'react/jsx-closing-bracket-location': 0, // Prettier.
    'react/jsx-filename-extension': 0, // JSX belongs to .js files.
    'react/jsx-indent': 0, // Prettier.
    'react/jsx-indent-props': 0, // Prettier.
    'react/jsx-wrap-multilines': 0, // Prettier.
    'react/no-danger': 0, // Control freaky.
    'react/no-unescaped-entities': 0, // Prettier.
    'react/prop-types': 'error',
    'react/require-default-props': 2,
    'react/jsx-no-bind': 2,
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-prototype-builtins': 'off',
    'no-useless-constructor': 0,
    'jsx-a11y/alt-text': 0,
    'no-param-reassign': 1,
    'react/jsx-props-no-spreading': 1,
    'class-methods-use-this': 0,
    'react/destructuring-assignment': 0,
    'no-nested-ternary': 'off',
    'react/forbid-prop-types': 0,
  },
  settings: {
    polyfills: ['promises'],
  },
};
