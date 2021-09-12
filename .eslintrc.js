"use strict";

/* eslint-disable @typescript-eslint/quotes */
const base = require("./src");
/* eslint-enable @typescript-eslint/quotes */

module.exports = {
  ...base,

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
    project: `./tsconfig.json`,
  },

  rules: {
    ...base.rules,
    "@typescript-eslint/no-unsafe-call": `off`,
    "unicorn/prefer-module": `off`,
  },
};
