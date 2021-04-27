"use strict";

/* eslint-disable @typescript-eslint/quotes */
const base = require("./src");
/* eslint-enable @typescript-eslint/quotes */

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    "@typescript-eslint/no-unsafe-call": `off`,
    "unicorn/prefer-module": `off`,
  },
};
