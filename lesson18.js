// Classes & OOP
// Classes do not replace prototypes. Classes are built on top of prototypes.
// You don't want to manually construct each object's behavior.
// You want a blueprint.
// That's where classes come in.


// The class itself isn't a user.
// It's a blueprint for creating users.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

// Then you create actual objects — called instances.
// new creates a new object and connects it to the class's prototype.
const ahad = new User("Ahad", 21);

console.log(ahad);
