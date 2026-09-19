// Spread Syntax & Rest Parameters ...

// SPREAD
// Take something together and distribute its individual parts outward.
// Take the elements inside nums and spread them here.
// Spread with array
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
console.log(newNumbers)

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
    age: 21
};
const userCopy = { ...user }; // creates a new outer object.
console.log(userCopy);

// Adding properties with object spread
const updatedUser = {
    ...user,
    country: "India"
};
console.log(updatedUser);

