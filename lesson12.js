// Array Methods
// A method is a function associated with an object.
// Since arrays are objects in JavaScript, arrays have their own methods

const numbers = [10, 20, 30];
numbers.push(40);
/*  │     │   │
    │     │   └── argument
    │     └─────── method
    └────────────── array/object
*/

// Callback function
// A function that you give to another function/method
// so that it can call your function later.
function greet() {
    console.log("Hello");
}

function doit(cb) {
    cb();
}

doit(greet);
