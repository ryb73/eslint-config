"use strict";

/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    `eslint:all`,
    `hardcore`,
    `hardcore/ts`,
    `hardcore/ts-for-js`,
    `hardcore/react`,
    `hardcore/react-testing-library`,
    `hardcore/jest`,
  ],

  ignorePatterns: [
    `.pnp.js`,
    `.yarn/`,
    `node_modules/`,
    `lib/`,
    `coverage/`,
    `.next/`,
  ],

  overrides: [
    {
      files: [
        `./.eslintrc.cjs`,
        `./.eslintrc.js`,
        `./babel.config.js`,
        `./jest.config.js`,
        `./jest.globalSetup.js`,
        `./jest.globalTeardown.js`,
        `./jest.setup.js`,
        `./metro.config.js`,
        `./next.config.js`,
        `./react-native.config.js`,
      ],
      parserOptions: {
        sourceType: `script`,
      },
      rules: {
        "unicorn/prefer-module": `off`,
      },
    },
    {
      files: [`**/*.d.ts`],
      rules: {
        "@typescript-eslint/consistent-type-definitions": `off`,
        "import/unambiguous": `off`,
      },
    },
    {
      files: [`**/*.stories.*`, `vitest.config.*`],
      rules: {
        "import/no-anonymous-default-export": `off`,
        "import/no-unused-modules": `off`,
      },
    },
  ],

  parserOptions: {
    sourceType: `module`,
    project: `./tsconfig.json`,
  },

  plugins: [`@emotion`],

  rules: {
    "@emotion/pkg-renaming": `error`,

    "@shopify/jsx-prefer-fragment-wrappers": `off`,

    "@typescript-eslint/comma-dangle": `off`,

    "@typescript-eslint/consistent-indexed-object-style": [`error`, `record`],
    "@typescript-eslint/consistent-type-assertions": `off`,

    // There are other reasons to do this (at least that I read online), but the straw that broke the camel's
    // back was interfaces not being able to be passed as Loggables
    "@typescript-eslint/consistent-type-definitions": [`warn`, `type`],

    "@typescript-eslint/dot-notation": `off`,
    "@typescript-eslint/explicit-function-return-type": `off`,
    "@typescript-eslint/explicit-module-boundary-types": `off`,
    "@typescript-eslint/indent": `off`,
    "@typescript-eslint/init-declarations": `off`,
    "@typescript-eslint/lines-between-class-members": `off`,
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
    "@typescript-eslint/semi": `off`,
    "@typescript-eslint/space-before-function-paren": `off`,
    "@typescript-eslint/strict-boolean-expressions": [
      `error`,
      {
        allowString: false,
        allowNumber: false,
        // Need allowNullableObject off to catch branded primitives (e.g. Branded<number, IntBrand>)
        allowNullableObject: false,
      },
    ],
    "@typescript-eslint/triple-slash-reference": `off`,
    "@typescript-eslint/unbound-method": `off`,

    "array-callback-return": `off`,

    "array-func/prefer-flat-map": `off`,

    camelcase: `off`,
    "capitalized-comments": `off`,
    complexity: `off`,
    curly: `off`,
    "default-case": `off`,
    "dot-notation": `off`,

    "eslint-comments/no-unlimited-disable": `off`,

    // This doesn't seem to catch the case where the import is renamed.
    // Using import/no-deprecated instead.
    "etc/no-deprecated": `off`,

    "etc/no-misused-generics": `off`,
    "etc/no-t": `off`,
    "etc/prefer-interface": `off`,

    "ext/lines-between-object-properties": `off`,

    "id-length": `off`,

    "import/exports-last": `off`,
    "import/extensions": `off`,
    "import/group-exports": `off`,
    "import/max-dependencies": `off`,
    "import/named": `off`,
    "import/newline-after-import": `off`,
    "import/no-commonjs": `off`,
    "import/no-deprecated": `warn`,
    "import/no-extraneous-dependencies": [
      `warn`,
      {
        devDependencies: [
          `.eslintrc.{js,ts,tsx}`,
          `.storybook/**.*`,
          `**/*.spec.{js,ts,tsx}`,
          `**/*.test.{js,ts,tsx}`,
          `config/**/*.{js,ts,tsx}`,
          `jest.config.{js,ts,tsx}`,
          `jest.globalSetup.{js,ts,tsx}`,
          `jest.globalTeardown.{js,ts,tsx}`,
          `jest.setup.{js,ts,tsx}`,
          `next.config.{js,ts,tsx}`,
          `rollup.config.{js,ts,tsx}`,
          `test/**/*`,
          `vitest.config.*`,
        ],
      },
    ],
    "import/no-namespace": `off`,
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

    "jest/consistent-test-it": `off`,
    "jest/lowercase-name": `off`,
    "jest/no-conditional-in-test": `off`,
    "jest/no-duplicate-hooks": `off`,
    "jest/no-export": `off`,
    "jest/no-hooks": `off`,
    "jest/prefer-expect-assertions": [
      `warn`,
      { onlyFunctionsWithAsyncKeyword: true },
    ],
    "jest/prefer-lowercase-title": `off`,
    "jest/prefer-strict-equal": `off`,
    "jest/require-hook": `off`,
    "jest/require-top-level-describe": `off`,
    "jest/unbound-method": `off`,
    "jest/valid-title": `off`,

    "jest-formatting/padding-around-all": `off`,

    "jsx-a11y/accessible-emoji": `off`,

    "line-comment-position": `off`,
    "lines-around-comment": `off`,
    "lines-between-class-members": `off`,
    "logical-assignment-operators": [
      `warn`,
      `always`,
      { enforceForIfStatements: false },
    ],
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
    "no-implicit-globals": `off`,
    "no-inline-comments": `off`,
    "no-invalid-this": `off`,
    "no-magic-numbers": `off`,
    "no-negated-condition": `off`,
    "no-nested-ternary": `off`,
    "no-param-reassign": [`warn`, { props: false }],
    "no-plusplus": `off`,
    "no-redeclare": `off`,
    "no-restricted-globals": `off`,
    "no-shadow": `off`,
    "no-ternary": `off`,
    "no-undef": `off`,
    "no-undefined": `off`,
    "no-underscore-dangle": `off`,
    "no-unused-expressions": `off`,
    "no-unused-vars": `off`,
    "no-use-before-define": `off`,
    "no-warning-comments": `off`,
    "padding-line-between-statements": `off`,
    "prefer-destructuring": `off`,

    "promise/avoid-new": `off`,
    "promise/catch-or-return": [
      `warn`,
      { terminationMethod: [`catch`, `finally`] },
    ],
    "promise/prefer-await-to-then": `off`,

    "putout/putout": `off`,

    "quote-props": `off`,
    quotes: `off`,

    "react/boolean-prop-naming": `off`,
    "react/destructuring-assignment": `off`,
    "react/forbid-component-props": `off`,
    "react/hook-use-state": `off`,
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
    "react/jsx-no-leaked-render": [
      `error`,
      { validStrategies: [`ternary`, `coerce`] },
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

    "react-hook-form/destructuring-formstate": `off`,

    "react-perf/jsx-no-jsx-as-prop": `off`,
    "react-perf/jsx-no-new-function-as-prop": `off`,
    "react-perf/jsx-no-new-object-as-prop": `off`,

    "require-await": `off`,

    "security/detect-child-process": `off`, // False positive on Regex.exec
    "security/detect-unsafe-regex": `off`, // False positive? Similar unicorn rule didn't throw error

    "sonarjs/cognitive-complexity": `off`,
    "sonarjs/elseif-without-else": `off`,
    "sonarjs/max-switch-cases": `off`,
    "sonarjs/no-nested-template-literals": `off`,
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
        caseSensitive: false,
        natural: true,
        minKeys: 5,
      },
    ],
    "spaced-comment": [`warn`, `always`, { markers: [`/`] }],

    "testing-library/no-unnecessary-act": `off`,
    "testing-library/render-result-naming-convention": `off`,

    // I'd love to enable it, but it's too hard to use
    "total-functions/no-unsafe-readonly-mutable-assignment": `off`,

    // Sometimes results in incorrect code, e.g.:
    // const { x } = o;
    // o.y = x;
    // something(o.y); // <- throws lint error, if fixed adds `y` to above destructuring, which is unsafe
    "unicorn/consistent-destructuring": `off`,

    "unicorn/no-abusive-eslint-disable": `off`,
    "unicorn/no-await-expression-member": `off`,
    "unicorn/no-negated-condition": `off`,
    "unicorn/no-null": `off`,
    "unicorn/no-thenable": `off`,
    "unicorn/no-unreadable-array-destructuring": `off`,
    "unicorn/prefer-node-protocol": `off`, // TODO: reevaluate later
    "unicorn/prefer-object-from-entries": `off`,
    "unicorn/prefer-query-selector": `off`,
    "unicorn/prevent-abbreviations": `off`,
    "unicorn/switch-case-braces": `off`, // Not necessary; no-case-declarations catches cases where braces matter
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
