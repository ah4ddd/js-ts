// There are three different things to distinguish:
// 1. Built-in Node modules — already come with Node
// 2. Third-party packages — you install them, roughly like pip install
// 3. Your own modules — files you create and import with paths

// The { add } syntax means: Import the named export called add
import { add, substract, multiply } from "./math.js";

console.log(add(10, 10));
console.log(substract(15, 10));
console.log(multiply(10, 10));
