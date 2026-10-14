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

/* The applications you eventually want to build:
- A dashboard that retrieves stock prices from an API.
- A backend that queries a database.
- A CLI program that waits for your input.
- A web application that sends requests to a server.
- A login system that checks credentials.
These operations take time.
Program cannot assume that everything finishes instantly.
That's where asynchronous JavaScript comes in. */
