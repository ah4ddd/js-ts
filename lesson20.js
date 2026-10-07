// Error Handling
// try...catch
// Instead of the error simply killing execution, the error is caught.
// error is a variable containing information about the error that was thrown.
// finally runs regardless. That's useful for cleanup.

console.log("Start");
console.log("Trying...")

try {
    const result = JSON.parse("Hello");
    console.log(result);
} catch (error) {
    console.error("Failed to parse JSON:", error.name);
} finally {
    console.log("Always runs")
}

console.log("Finished.");

// You can throw errors yourself
function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient funds")
    }
    return balance - amount;
}

// throw + catch
try {
    const result = withdraw(1000, 5000);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

// throw immediately interrupts the current flow
console.log("A");
// throw new Error("Boom");
console.log("B");

// throw doesn't have to be inside a function
// But in real programs, you'll often see errors thrown from functions:
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

divide(12, 0);

// Custom errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// throw new ValidationError("Email is invalid");

// Error travel upward
// An uncaught exception moves back up that stack looking for a handler.
function a() {
    b();
}

function b() {
    c();
}

function c() {
    throw new Error("Boom");
}

// Nested try...catch
// The inner catch handles it, so the outer catch
// doesn't receive that same exception.
// You generally don't need deeply nested error handling.
try {
    try {
        throw new Error("Boom");
    } catch (error) {
        console.log("Inner catch");
    }
} catch (error) {
    console.log("Outer catch");
}

// A very important rule: don't swallow errors
