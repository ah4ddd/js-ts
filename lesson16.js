// LESSON 16 — this
// `this` refers to the object that is calling the function
// when the function is called as an object method.

// this is NOT determined by where the function is written.
// For a normal function, this is primarily determined by how the function is called.

// `this` refers to user -> this.name means user.name
// The call site determines `this`
// this → object, this → user
const user = {
    name: "Ahad",

    greet() {
        console.log(this.name);
    }
};
user.greet();


// The same function is being used by two objects.
// The function itself didn't change.
// It's the call site that changes what this refers to.
const user1 = {
    name: "Ahad",
    greet() {
        console.log(this.name);
    }
};

const user2 = {
    name: "John",
    greet: user1.greet
};

user1.greet();
user2.greet();

