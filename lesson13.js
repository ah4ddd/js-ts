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
    role: "Software Developer"
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
