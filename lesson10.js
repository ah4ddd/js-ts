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
        country: "India"
    }
};

const { name, age, country } = user;
console.log(name, age, country);

// Renaming During Destructuring
const { name: userName } = user;
console.log(userName);

// Destructuring Nested Objects
const { address } = user;
console.log(address.city)
