"use strict";

module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    `eslint:all`,
    `plugin:react/all`,
    `plugin:react-hooks/recommended`,
    `plugin:@typescript-eslint/all`,
    `hardcore`,
  ],

  ignorePatterns: [`.pnp.js`, `.yarn`],

  parserOptions: {
    sourceType: `script`,
    project: `./tsconfig.json`,
  },

  plugins: [`@emotion`],

  rules: {
    "@emotion/pkg-renaming": `error`,

    "@typescript-eslint/comma-dangle": `off`,

    // There are other reasons to do this (at least that I read online), but the straw that broke the camel's
    // back was interfaces not being able to be passed as Loggables
    "@typescript-eslint/consistent-type-definitions": [`warn`, `type`],

    "@typescript-eslint/dot-notation": `off`,
    "@typescript-eslint/explicit-function-return-type": `off`,
    "@typescript-eslint/explicit-module-boundary-types": `off`,
    "@typescript-eslint/indent": `off`,
    "@typescript-eslint/init-declarations": `off`,
    "@typescript-eslint/naming-convention": `off`,
    "@typescript-eslint/no-confusing-void-expression": [
      `warn`,
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-dynamic-delete": `off`,
    "@typescript-eslint/no-empty-function": `off`,
    "@typescript-eslint/no-explicit-any": `off`,
    "@typescript-eslint/no-extra-parens": `off`,
    "@typescript-eslint/no-invalid-this": `off`,
    "@typescript-eslint/no-invalid-void-type": `off`,
    "@typescript-eslint/no-magic-numbers": `off`,
    "@typescript-eslint/no-non-null-assertion": `off`,
    "@typescript-eslint/no-require-imports": `off`,
    "@typescript-eslint/no-type-alias": `off`,
    "@typescript-eslint/no-unsafe-assignment": `off`,
    "@typescript-eslint/no-var-requires": `off`,
    "@typescript-eslint/object-curly-spacing": `off`,
    "@typescript-eslint/prefer-nullish-coalescing": `off`,
    "@typescript-eslint/prefer-readonly-parameter-types": `off`,
    "@typescript-eslint/promise-function-async": `off`,
    "@typescript-eslint/quotes": [`warn`, `backtick`],
    "@typescript-eslint/semi": `warn`,
    "@typescript-eslint/space-before-function-paren": `off`,
    "@typescript-eslint/strict-boolean-expressions": `off`,
    "@typescript-eslint/unbound-method": `off`,

    "array-callback-return": `off`,

    "array-func/prefer-flat-map": `off`,

    camelcase: `off`,
    "capitalized-comments": `off`,
    complexity: `off`,
    curly: `off`,
    "default-case": `off`,

    "eslint-comments/no-unlimited-disable": `off`,

    "ext/lines-between-object-properties": `off`,

    "id-length": `off`,

    "import/exports-last": `off`,
    "import/extensions": `off`,
    "import/group-exports": `off`,
    "import/max-dependencies": `off`,
    "import/no-commonjs": `off`,
    "import/no-extraneous-dependencies": [
      `warn`,
      {
        devDependencies: [
          `config/**/*.js`,
          `test/**/*`,
          `.eslintrc.js`,
          `jest.config.js`,
          `jest.globalSetup.js`,
          `jest.globalTeardown.js`,
          `jest.setup.js`,
          `next.config.js`,
          `**/*.test.{js,ts,tsx}`,
          `**/*.spec.{js,ts,tsx}`,
        ],
      },
    ],
    "import/no-unassigned-import": `off`,
    "import/order": [
      `warn`,
      {
        alphabetize: { order: `asc`, caseInsensitive: true },
        "newlines-between": `never`,
      },
    ],
    "import/prefer-default-export": `off`,

    "init-declarations": `off`,
    "line-comment-position": `off`,
    "lines-around-comment": `off`,
    "max-len": `off`,
    "max-lines": `off`,
    "max-lines-per-function": `off`,
    "max-params": `off`,
    "max-statements": `off`,
    "new-cap": `off`,
    "no-console": `warn`,
    "no-duplicate-imports": `off`,
    "no-empty-function": `off`,
    "no-implicit-coercion": `off`,
    "no-inline-comments": `off`,
    "no-invalid-this": `off`,
    "no-magic-numbers": `off`,
    "no-negated-condition": `off`,
    "no-nested-ternary": `off`,
    "no-param-reassign": [`warn`, { props: false }],
    "no-plusplus": `off`,
    "no-redeclare": `off`,
    "no-shadow": `off`,
    "no-ternary": `off`,
    "no-undef": `off`,
    "no-undefined": `off`,
    "no-underscore-dangle": `off`,
    "no-unused-vars": `off`,
    "no-use-before-define": `off`,
    "no-warning-comments": `off`,
    "padding-line-between-statements": `off`,

    "promise/avoid-new": `off`,

    "putout/putout": `off`,

    "quote-props": `off`,
    quotes: `off`,

    "react/destructuring-assignment": `off`,
    "react/forbid-component-props": `off`,
    "react/jsx-curly-newline": `off`,
    "react/jsx-filename-extension": `off`,
    "react/jsx-indent": `off`,
    "react/jsx-indent-props": `off`,
    "react/jsx-max-depth": `off`,
    "react/jsx-max-props-per-line": `off`,
    "react/jsx-newline": `off`,
    "react/jsx-no-bind": [
      `warn`,
      {
        ignoreDOMComponents: true,
      },
    ],
    "react/jsx-no-literals": `off`,
    "react/jsx-no-useless-fragment": `off`,
    "react/jsx-one-expression-per-line": `off`,
    "react/jsx-props-no-spreading": `off`,
    "react/jsx-sort-props": `off`,
    "react/no-multi-comp": `off`,
    "react/prop-types": `off`,
    "react/react-in-jsx-scope": `off`,
    "react/require-default-props": `off`,

    "require-await": `off`,

    "security/detect-child-process": `off`, // False positive on Regex.exec
    "security/detect-unsafe-regex": `off`, // False positive? Similar unicorn rule didn't throw error

    "sonarjs/cognitive-complexity": `off`,
    "sonarjs/no-small-switch": `off`,

    "sort-imports": [
      `warn`,
      {
        ignoreDeclarationSort: true,
      },
    ],
    "sort-keys": [
      `warn`,
      `asc`,
      {
        caseSensitive: true,
        natural: true,
        minKeys: 5,
      },
    ],

    "unicorn/no-abusive-eslint-disable": `off`,
    "unicorn/no-null": `off`,
    "unicorn/no-unreadable-array-destructuring": `off`,
    "unicorn/prevent-abbreviations": `off`,
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
    react: {
      version: `detect`,
    },
  },
};
