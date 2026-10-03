// LESSON 17 — PROTOTYPES
// Where does JavaScript actually look when you ask for
// a property or method that isn't directly inside the object?

// A prototype is an object that another object
// can inherit properties and methods from.

const user = {
    name: "Ahad"
};

console.log(user.toString());

// Every normal object has a prototype
