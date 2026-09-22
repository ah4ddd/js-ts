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
    skils: ["Python", "JavaScript", "TypeScript", "SQL"]
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

// Object methods vs methods ON objects
