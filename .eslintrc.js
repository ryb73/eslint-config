"use strict";

module.exports = {
  extends: `./src`,

  overrides: [
    {
      files: [`./test/**/*`],
      parserOptions: {
        sourceType: `module`,
      },
    },
  ],

  parserOptions: {
    sourceType: `script`,
  },

  rules: {
    "@typescript-eslint/no-unsafe-call": `off`,
    "unicorn/prefer-module": `off`,
  },
};
