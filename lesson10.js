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

    }
};

const { name, age } = user;
console.log(name, age);

// Renaming During Destructuring
const { name: userName } = user;
console.log(userName);

// Destructuring Nested Objects
const { address } = user;
console.log(address.country)

// Destructure deeper
const { address: { city, country, state } } = user;
console.log(city, state)

