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
// If it doesn't find the variable in the current scope,
// JavaScript searches outward.
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

// Shadowing
// Now we get another important concept.
// You can declare a variable with the same name in an inner scope.
// That's called shadowing.
const name = "GLOBAL2"
function testThree() {
    const name = "Local"
    console.log(name)
}

testThree();
console.log(name)

// Scope is determined by where code is WRITTEN
// JavaScript determines scope from the structure/location of your code.
// lexical → where it's written in the code

// scope vs value
let age = 21;
if (true) {
    age = 22;
}

// Scope + your previous lessons
// i is scoped to the loop
for (let i = 0; i < global.length; i++) {
    console.log(global[i]);
}

// a and b are local to that function
function add(a, b) {
    return a + b;
}

// Even the callback parameters exists within that callback's scope.
