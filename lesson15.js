// Closures
// A closure happens when a function remembers and retains access to
// variables from the scope where that function was created,
// even after that outer scope has finished executing.

function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

// errorLog is a function that remembers prefix.
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const errorLog = createLogger("ERROR");

errorLog("Database connection failed");
