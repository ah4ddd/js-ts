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
