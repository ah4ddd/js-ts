// Array Methods
// A method is a function associated with an object.
// Since arrays are objects in JavaScript, arrays have their own methods

const numbers = [10, 20, 30];
numbers.push(40);
/*  │     │   │
    │     │   └── argument
    │     └─────── method
    └────────────── array/object
*/

// Callback function
// A function that you give to another function/method
// so that it can call your function later.
function greet() {
    console.log("Hello");
}

function doIt(cb) {
    cb(); // NOW execute the function
}

doIt(greet); // pass the function

// Why the hell do array methods need callbacks?
// Cos JavaScript can't magically know your desired operation.
// forEach() — Array method that takes a callback function
// and runs that callback once for every element in the array.
// Essentially an array method with a loop built into it.
// forEach() is basically a cleaner way to iterate.
numbers.forEach(function (number) { // Run this function for each value.
    console.log(number * 10);
});

// Arrow Function =>
// Putting the function into a variable.
// Removing the function keyword.
// Putting => after the parameters.
const greeting = (n) => {
    console.log(`Hello ${n}`)
}
greeting("Ahad");

// If the function has one parameter, you can omit the parentheses
//  Why can you remove the {} ? Because an arrow function has a short form
//  for when its body is just one expression.
// Multiple statements → braces
// One expression → braces can be removed
numbers.forEach(number => console.log(number / 2));

// And if the function contains only one expression that you want to return,
// you can remove the braces and return
const double = num => num * 2;
console.log(double(100));

// The callback can receive more than the value
// eg: value, index, array
// The third argument is the original array.
const fruits = ["kiwi", "orange", "mango"];
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// map() -> map() goes through an array, does something to each element,
// and creates a NEW array containing the results.
// Take every element → transform it → put the result into a new array.
// map() always gives you a new array
// map = transform
const doubled = numbers.map(function (number) {
    // Give map() the result for each number,
    // so it can put those results into the new array
    return number * 2;
});

console.log(doubled);

// map() with arrow function
// New array is ultimately stored in tripled,
// because map() returns that new array.
// If you're using the short arrow-function syntax,
// you don't write return
// No {} → automatic return
// {} → you must write return
const tripled = numbers.map(num => num * 3);
console.log(tripled)

// The most important distinction right now
// forEach → performs an action for every element.
// map → transforms every element and gives you a new array.

// filter() — keep only what passes a condition
// filter() does NOT transform the values
// filter() asks: Should this element stay?
// Items aren't transformed. They're either kept or discarded.
const numBers = [1, 3, 2, 4, 6, 8, 80, 40];

const evenNumbers = numBers.filter(n => {
    return n % 2 === 0;
});
console.log(evenNumbers);
