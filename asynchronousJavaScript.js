// Lesson 21 — Asynchronous JavaScript
// What happens when a program needs to wait.

// Synchronous execution
// Synchronous means that operations execute in sequence:
// the next statement normally waits for the current operation to finish.

// Nothing surprising. JavaScript executes the statements in order.
console.log("First");
console.log("Second");
console.log("Third");
console.log();

// consider this function:
function makeCoffe() {
    console.log("Making coffee...")
}

console.log("Start");
makeCoffe();
console.log("Finish");
console.log();

/* The applications you eventually want to build:
- A dashboard that retrieves stock prices from an API.
- A backend that queries a database.
- A CLI program that waits for your input.
- A web application that sends requests to a server.
- A login system that checks credentials.
These operations take time.
Program cannot assume that everything finishes instantly.
That's where asynchronous JavaScript comes in. */

// Asynchronous execution
// Now let's introduce a delay using setTimeout().
// JavaScript print "Two" after approximately 200 milliseconds,
// But JavaScript didn't stop everything and wait for those two seconds to pass.
// It continued to the next statement. The delayed callback ran later.

console.log("One")

setTimeout(() => {
    console.log("Two")
}, 200);

console.log("Three");
console.log();

// What exactly is setTimeout()?
// setTimeout(callback, delay);
// callback -> The function to run later
// delay -> The minimum delay in milliseconds
// Here, the function is passed as a callback.
// But here's the trap: setTimeout() does not guarantee execution at
// an exact time. It means the callback becomes eligible to run
// after the delay. If JavaScript is busy, the callback must wait.
// Even with a delay of zero, the callback doesn't execute
// immediately in the middle of the current synchronous code.

setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);

// The call stack and the event loop
// The call stack
// The stack follows a last in, first out principle:
// the most recently called function finishes before the function
// that called it can continue.
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

// The stack follows a last in, first out principle: the most recently
// called function finishes before the function that called it can continue.
first();
console.log("Done");

