// Closures
// A closure happens when a function remembers and retains access to
// variables from the scope where that function was created,
// even after that outer scope has finished executing.

// We're not calling inner.
// We're returning the function itself.
// Functions are values (Lesson 7)
function outer() {
    // The variable belongs to the lexical environment of outer.
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

// Give the inner function back to whoever called outer()
// Then outer() finishes
const fn = outer(); // <- inner() Function
fn();

// Closure = function + surrounding environment

// Closures don't require return
// Returning a function is just a very obvious way to demonstrate a closure.
// But production, returning the inner function is absolutely
// a normal pattern when a closure is what you need.

// Create the counter once → it creates count = 0 and
// increment → increment is returned and stored in counter
// → every counter() call runs increment,
// which modifies the same remembered count.
function createCounter() {
    let count = 0; // needs modification, therefore; let

    function increment() {
        count++;
        return count;
    }

    return increment;
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Multiple counter
// Each call to createCounter() creates a separate lexical environment.
const counterB = createCounter();
console.log(counterB()) // 1

// Closures + scope chain
// Closure doesn't destroy that rule.
// Instead, the inner function retains access to its lexical scope.
const global = "GLOBAL";
function gOuter() {
    const outerValue = "OUTER";
    return function inner() {
        console.log(global);
        console.log(outerValue);
    };
}

const gs = gOuter();
gs();


// Closure can create private state
// This is one of the major practical uses of closures:
// Encapsulation / private state.
function createBankAccount() {

    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();
account.deposit(500);
console.log(account.getBalance());

// Closures aren't only about variables
// A closure can capture multiple things.
function createUser() {
    const name = "Ahad";
    const age = 21;
    const role = "Developer";

    return function () {
        console.log(name);
        console.log(age);
        console.log(role);
    };
}

user = createUser();
// It doesn't just remember one variable.
// It retains access to the lexical environment it needs.
user();

// Closure + Function parameters
function greet(name) {
    return function () {
        console.log(`Hello ${name}`);
    };
}

const greetAhad = greet("Ahad");
const greetHer = greet("Bae");
greetAhad();
greetHer();

// One extremely important distinction: closure vs callback
// The function is:
// a callback because it's passed to map()
// also a closure because it accesses multiplier from its surrounding scope
const multiplier = 2;
// a callback can also be a closure
[1, 2, 3].map(function (number) {
    return number * multiplier;
});

// Classic closure factory
// Function creates another function customized with some remembered data.
function multiplyBy(x) {
    return function (number) {
        return number * x;
    };
}

const double = multiplyBy(2); // closure -> x = 2
const triple = multiplyBy(3); // closure -> x = 3

console.log(double(10));
console.log(triple(50));

// errorLog is a function that remembers prefix.
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const errorLog = createLogger("ERROR");

errorLog("Database connection failed");
