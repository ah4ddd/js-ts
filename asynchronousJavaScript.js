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
console.log();

// The event loop
// The event loop helps coordinate when queued asynchronous callbacks can run.
// Event loop and callback execution
// Once the callback is eligible and the call stack is available,
// the callback can execute.
console.log("Start Timer");

setTimeout(() => {
    console.log("Time finished");
}, 1000);

console.log("Timer End")

// What is a callback, and why does it matter here?
// A callback is a function passed to another function so
// that the receiving function can invoke it.
function greetUser(name, callback) {
    console.log(`Hello ${name}`)
    callback();
}

function showMessage() {
    console.log("Welcome to the store");
}

greetUser("Ahad", showMessage);
console.log();

// Remember: callback describes how a function is passed and used. Asynchronous
// describes when work happens relative to the current execution.
// They're related, but they aren't synonyms.

// Exercise A — Basic ordering
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// Exercise B — Nested callbacks
console.log("Start");

setTimeout(() => {
    console.log("Inside timer");

    setTimeout(() => {
        console.log("Inside nested timer");
    }, 0);

    console.log("After nested timer scheduled");
}, 1000);

console.log("End");

// Exercise C — Function calls and timers
function one() {
    console.log("First");

    setTimeout(() => {
        console.log("Timer inside first");
    }, 0);

    two();
}

function two() {
    console.log("Second");
}

one();

console.log("Finished");

// Exercise E — Build your own
console.log("Preparing task...");

setTimeout(() => {
    console.log("Task completed!")
}, 2000);

console.log("doing other work...")

/*
Synchronous: code executes in sequence; the current operation completes before execution proceeds.

Asynchronous: work can be scheduled to complete or continue later, allowing other work to proceed while it is pending.

setTimeout(callback, delay): schedules a callback to become eligible after a minimum delay.

Callback: a function passed to another function for it to invoke.

Call stack: tracks currently executing function calls.

Event loop: coordinates when eligible callbacks can execute.

Blocking: synchronous work occupies the JavaScript thread and delays other work that needs it.

Zero delay isn't immediate: the callback still waits until the current synchronous execution finishes.

Asynchronous isn't the same as parallel: JavaScript can coordinate asynchronous operations without executing all of your JavaScript simultaneously.
*/
