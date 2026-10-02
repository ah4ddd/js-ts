// LESSON 16 — this
// `this` refers to the object that is calling the function
// when the function is called as an object method.

// this is NOT determined by where the function is written.
// For a normal function, this is primarily determined by how the function is called.

const user = {
    name: "Ahad",

    greet() {
        console.log(this.name);
    }
};

user.greet();
