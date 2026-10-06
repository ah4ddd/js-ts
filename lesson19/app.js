// There are three different things to distinguish:
// 1. Built-in Node modules — already come with Node
// 2. Third-party packages — you install them, roughly like pip install
// 3. Your own modules — files you create and import with paths

// The { add } syntax means: Import the named export called add
// -> ./ means current directory
import { add as sum, substract, multiply } from "./math.js";

console.log(sum(10, 10));
console.log(substract(15, 10));
console.log(multiply(10, 10));

/*
NAMED
export { add }
        ↓
import { add }


DEFAULT
export default User
        ↓
import User

One default export, A module can have: export default ...
only once.
*/
