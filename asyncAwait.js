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

// Imagine a store that needs to retrieve a product and then calculate its price.
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


// Error handling with try/catch
function getProd() {
    return Promise.reject(new Error("Product not found"));
}

// When you await a rejected Promise,
// the rejection is thrown at the await expression.
// A surrounding try/catch can handle it.
async function main3() {
    try {
        const product = await getProd();

        console.log(product);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

main3();

async function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

async function main4() {
    try {
        const result = await divide(10, 10);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main4();

// A common trap: await doesn't automatically make operations run
// one after another

// Each wait starts only when execution reaches it.
// So these two waits take approximately 3 seconds in total.
async function main5() {
    const first = await wait(1000);
    const second = await wait(2000);

    console.log("Finished");
}

// top-level await in supported module contexts
const resultt = await Promise.resolve(42);
console.log(resultt);


// DIY
function getOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1001,
                status: "confirmed",
                total: 59400
            });
        }, 1000);
    });
}

async function main6() {
    const order = await getOrder();

    console.log(`Order ID: ${order.id}`);
    console.log(`Status: ${order.status}`);
    console.log(`Total: ${order.total}`);
}

main6();
