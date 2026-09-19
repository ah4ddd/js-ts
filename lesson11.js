// Spread Syntax & Rest Parameters ...

// SPREAD
// Take something together and distribute its individual parts outward.
// Take the elements inside nums and spread them here.
// Spread with array (one array -> individual values)
const numbers = [10, 20, 30];
console.log(...numbers);

// The fundamental mental model
// Spread: Take one thing → spread its contents out -> ...array
// Rest: Take multiple things → collect them into one thing -> ...parameters

// SPREAD: [1, 2, 3] -> 1, 2, 3 (unpack)
// REST: 1, 2, 3 -> [1, 2, 3] (collect)

// Spread creates a new array
// Create a new array and insert all the elements of numbers into it
const copy = [...numbers];
copy.push(40);
// Different arrays
console.log(numbers);
console.log(copy);

// Adding elements while spreading
const newNumbers = [0, ...numbers, 40];
console.log(newNumbers);

// concatenation of array
console.log([...numbers, ...numbers]);
// Combining arrays
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Python", "fastapi", "SQL"];
const skills = [...frontend, ...backend];
console.log(skills);

// Spread gives you a shallow copy.
// "Shallow" means the outer container is copied,
//  but nested objects/arrays aren't recursively cloned.

// Spread works with objects too
const user = {
    name: "Ahad",
    age: 21,
    role: "Software Developer"
};
const userCopy = { ...user }; // creates a new outer object.
console.log(userCopy);

// Adding properties with object spread
const updatedUser = {
    ...user,
    country: "India"
};
console.log(updatedUser);

// overwriting properties
// object properties appearing later overwrite earlier
// properties with the same key
// Order matters
const updateTheUser = {
    ...updatedUser,
    age: 22
};

console.log(updateTheUser);

// Spread with function calls
function add(a, b, c) {
    return a + b + c;
};

const nums = [50, 60, 70];
console.log(add(...nums)); // 3 arguments

// Rest Parameters (the rest of the arguments)
// Individual values -> one array
function sub(...nums) {
    console.log(nums);
};
sub(10, 20, 30);

// Why is it called REST?
// because it means -> the rest of arguments
// Rest must come at the end
function test(first, second, ...rest) {
    console.log(first);
    console.log(second);
    console.log(rest);
}
test(10, 20, 30, 40, 50, 60, 70, 80);

// Practical Algorithm
// Inside each call, numbers is simply an array.
function total(...numbers) {
    let sum = 0;
    for (let nums of numbers) {
        sum += nums
    }
    return sum;
}

console.log(total(150, 10, 40, 55, 70));

// Spread + destructuring
const digits = [4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = digits;
console.log(first, second, rest);

// Spread with objects
const { name, ...otherDetails } = user;
console.log(name, otherDetails);

// Spread vs Destructuring
// Destructuring -> Takes things apart into named variables.
// Spread -> Takes things apart and expands them into another structure/context.

/*
SPREAD (...)
----------------
Expand / unpack

[...arr]
{...obj}
fn(...arr)

One thing → many values


REST (...)
----------------
Collect / pack

function fn(...args)
const [first, ...rest] = arr
const {name, ...details} = obj

Many values → one collection
 */
