// Object Methods & Iteration
// tools to extract those properties into arrays.
// And the three big ones are:
//  Object.keys()
//  Object.values()
//  Object.entries()
// These three are the core of Lesson 13.

const user = {
    name: "Ahad",
    age: 21,
    country: "India",
    role: "Software Developer",
    skils: ["Python", "JavaScript", "TypeScript", "SQL"],
    address: {
        city: "Lucknow",
        state: "UP"
    }
};

// give all the keys as an array.
// The result is an array.
// Now you can use everything you learned in Lesson 12 on it.
console.log(Object.keys(user).map(x => x + " wow"));

const keys = Object.keys(user);
// OBJECT -> Object.keys() -> ARRAY -> array iteration methods
for (const key of keys) {
    console.log(key);
}

// give object values in an array (property values)
console.log(Object.values(user));

// Object.entries() - give both (array of arrays) -> [key, value]
console.log(Object.entries(user));
// Now you can iterate over an object and
// get both the key and value simultaneously
// const [key, value] -> that's array destructuring
// gives key = "name", value = "Ahad"
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// Object.keys + forEach()
// Produces an array then iterates over that array
Object.keys(user).forEach(k => {
    console.log(k);
});

console.log();

// Getting the value dynamically
// Look for a property literally called "key".
Object.keys(user).forEach(key => {
    console.log(key, user[key]);
});

console.log();

// Object.entries() makes it cleaner
// callback parameter + array destructuring
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
});

console.log();

// Object iteration with for...of
// For every property in this object, give me its key and its value
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
};

console.log();

// for...in vs for...of
// for...of -> Gives you values from an iterable.
// for...in -> Gives you keys/property names.
for (const key in user) {
    console.log(key, user[key]);
}

console.log();

// Object.keys/values/entries() isn't mutating your object
// It creates a new array containing the keys.

// Nested Object
Object.entries(user).forEach(([k, v]) => {
    console.log(k, v);
});

console.log();

// Where Lesson 12 comes back hard
const upperKeys = Object.keys(user).map(key => key.toUpperCase());
console.log(upperKeys);

console.log();

const product = {
    name: "Laptop",
    price: 70000,
    stock: 5,
    brand: "Asus"
};

const numericEntries = Object.entries(product).filter(([k, v]) =>
    typeof v === "number");

console.log(numericEntries);

console.log();

// turn an object into a readable string
Object.entries(user).forEach(([k, v]) => {
    console.log(`${k} : ${v}`);
});

// Three Methods to lock in
/*
Object.keys()
        ↓
[property names]

Object.values()
        ↓
[property values]

Object.entries()
        ↓
[[key, value], [key, value], ...]

----------------------------------

OBJECT
  ↓
┌───────────────┬───────────────┬
│               │               │
keys()        values()        entries()
│               │               │
↓               ↓               ↓
keys          values        [key, value]
array         array          arrays
│               │               │
└───────────────┴───────────────┘
                ↓
        ARRAY METHODS WORK
*/
