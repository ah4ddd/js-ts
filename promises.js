// Lesson 22 — Promises in JavaScript

// Last lesson, you learned how JavaScript schedules work to happen later.
// Today, we're answering a new question:
// When an asynchronous operation finishes later,
// how do we represent its result and handle success or failure?

// JavaScript has a built-in object called a Promise that
// represents the eventual outcome of an operation.
// A Promise can be:
// - pending — the result hasn't settled yet;
// - fulfilled — the operation succeeded;
// - rejected — the operation failed.

// A Promise settles when it becomes fulfilled or rejected.
// Once settled, its state cannot change.
// Notice something important: a Promise is not the result itself.
// It is an object representing the result you may receive later.

// First Promise
// - new Promise(...) creates a Promise object.
// - The function passed to the constructor is called the executor function.
// - resolve is a function that fulfills the Promise with a value.
// - reject is a function that rejects the Promise with a reason.
const myPromise = new Promise((resolve, reject) => {
    resolve("Operation successful");
});

console.log(myPromise);

// The executor runs synchronously, immediately when the Promise is constructed.
// The Promise doesn't mean the executor itself runs later.
// You don't need to call it yourself.
console.log("A");

const promise = new Promise((resolve) => {
    console.log("B");
    resolve("Done");
});

console.log("C");
// The executor runs immediately.
// The Promise becomes fulfilled when resolve("Done") is called.
console.log(promise)
