// Lesson 23 — async/await in JavaScript


// The problem with Promise chains
function getPrice() {
    return Promise.resolve(500);
}

getPrice()
    .then((price) => {
        console.log("Price:", price);
        return price * 2;
    })
    .then((result) => {
        console.log("Doubled:", result);
    })
    .catch((error) => {
        console.log(error.message);
    });

// This works. But imagine you have five
// or ten sequential asynchronous operations.
// Long chains can become harder to read,
// especially when you have conditions, variables,
// loops, and error handling mixed together.

// JavaScript gives us async and await to make this code easier to express.

