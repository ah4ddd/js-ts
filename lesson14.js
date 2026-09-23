// Scope
// The region of your code where a variable is accessible.
// From this exact location in the code, can JavaScript see this variable?

// Global Scope
const country = "India";
// Inner scopes can access variables from outer scopes.
function showCountry() {
    if (country) {
        console.log(country);
    }
}

showCountry();

// Outer → Inner does NOT work
// Function Scope
// Every function creates its own scope.

function test() {
    const x = 10;
    console.log(x ** x);
}

test();
// console.log(x); <- Fails cos x belongs to test();

// BLOCK SCOPE
// A block is code surrounded by:
if (true) {
    const message = "Hiee";
    console.log(message);
}
// The { } creates a block.
// And let and const are block-scoped.

// var is different
// var is function-scoped, not block-scoped.

if (true) {
    var y = 25;
}
console.log(y); // works
// Because the if block doesn't contain var the way it contains let/const.
// var belongs to the surrounding function scope.

// Note: Use const by default. Use let when reassignment is necessary.
// Avoid var unless you have a specific reason to deal with legacy code.

//Function + Block scope together
// Inner → outer: yes.
// Outer → inner: no.
function testTwo() {
    const a = 10;
    if (true) {
        const b = 20;

        console.log(a);
        console.log(b);
    }
    console.log(a);
    //  console.log(b); <- Error because the outer function cannot see b.
}

// Scope Chain
const global = "GLOBAL";

function outer() {
    const outerValue = "OUTER";
    function inner() {
        const innerValue = "INNER";

        console.log(global);
        console.log(outerValue);
        console.log(innerValue);
    }
    inner();
}

outer();
