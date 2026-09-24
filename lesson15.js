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

// errorLog is a function that remembers prefix.
function createLogger(prefix) {
    return function (message) {
        console.log(`[${prefix}] ${message}`);
    };
}

const errorLog = createLogger("ERROR");

errorLog("Database connection failed");
