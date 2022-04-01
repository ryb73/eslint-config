import { version } from "typescript";
import { blah } from "./blah";

// eslint-disable-next-line import/no-unused-modules
export function fun() {
  return [blah, version];
}
