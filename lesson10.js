// DESTRUCTURING
// Take values out of an array or object and put them directly into variables
// And the normal English meaning
// Destructure basically means:
// to break something structured into its individual parts.

const user = {
    name: "Ahad",
    age: 21,
    address: {
        city: "Lucknow",
        state: "UP",
        country: "India",
        role: "Admin",
        email: "ahad@example.com"

    }
};

const { name, age, role, email } = user;
console.log(name, age, role);

// Renaming During Destructuring
const { name: userName } = user;
console.log(userName);

// Destructuring Nested Objects
const { address } = user;
console.log(address.country);

// Destructure deeper
const { address: { city, country, state } } = user;
console.log(city, state);

// Array Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

// Skip Array Elements
const integers = [40, 50, 60];
const [d, , f] = integers;
console.log(d, f);

//Swapping Variables -> Array destructuring being used for assignment
let g = 10;
let h = 20;
[g, h] = [h, g];
console.log(g);
console.log(h);

// Function Parameters
function greet({ name }) {
    console.log(`Hello ${name}`);
}
greet({ name: name })

// The Rule
// Object -> Property Based
// const {name, age} = user;
// name -> user.name, user.age

// Array -> Position Based
// const [first, second] = numbers;
// first -> numbers[0], second -> numbers[1]
