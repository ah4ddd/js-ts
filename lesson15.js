// Closures
// A closure happens when a function remembers and retains access to
// variables from the scope where that function was created,
// even after that outer scope has finished executing.


// We're not calling inner.
// We're returning the function itself.
// Functions are values (Lesson 7)
function outer() {
    // The variable belongs to the lexical environment of outer.
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

// Give the inner function back to whoever called outer()
// Then outer() finishes
const fn = outer(); // <- inner() Function
fn();

// Closure = function + surrounding environment

// Closures don't require return
// Returning a function is just a very obvious way to demonstrate a closure.
// But production, returning the inner function is absolutely
// a normal pattern when a closure is what you need.
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    return increment;
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3


// errorLog is a function that remembers prefix.
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const errorLog = createLogger("ERROR");

errorLog("Database connection failed");
