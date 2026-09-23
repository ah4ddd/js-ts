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
