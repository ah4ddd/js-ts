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

console.log();

// This works. But imagine you have five
// or ten sequential asynchronous operations.
// Long chains can become harder to read,
// especially when you have conditions, variables,
// loops, and error handling mixed together.

// JavaScript gives us async and await to make this code easier to express
// async/await lets you write Promise-based asynchronous logic
// in a sequential-looking style.
async function main() {
    const price = await getPrice();

    console.log("Price:", price);

    const result = price * 2;

    console.log("Doubled:", result);
}

main();

// The async keyword marks a function as asynchronous and makes
// that function return a Promise.
async function greet() {
    return "Hello";
}

const result = greet();
console.log(result);

greet().then((message) => {
    console.log(message);
});

// Don't need to write return Promise.resolve(...) inside every async function
// Returning an ordinary value is usually enough.

// await is used inside an async function to wait for a Promise's outcome
// and give you its fulfillment value.
// getPrice() returns a Promise.
// await waits for its outcome and gives you the fulfillment value, 500.
async function getNum() {
    const num = await getPrice();

    console.log(num);
}

getNum();


function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function mainn() {
    console.log("First");

    await wait(2000);

    console.log("Second");
}

mainn();

console.log("Third");

function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Keyboard",
                price: 3000
            });
        }, 1000);
    });
}

async function main2() {
    console.log("Fetching product...");

    const product = await getProduct();

    console.log("Product:", product.name);
    console.log("Price:", product.price);
    console.log("Double price:", product.price * 2);
}

main2();
