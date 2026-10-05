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
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Then you create actual objects — called instances.
// new creates a new object and connects it to the class's prototype.
// creates the instance, inside the constructor and
// `this.` refers to new object being created
const ahad = new User("Ahad", 21);
const john = new User("John", 25)

console.log(ahad.name);

// Multiple objects, one method
// But they use the same prototype method.
ahad.greet();
john.greet();

// defining what a Dog object should look like and what it can do.
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`${this.name} says Woof!`)
    }
}

const dog1 = new Dog("Maxxy", 2);
const dog2 = new Dog("Buddy", 4);

// Dog.prototype (That's prototypes underneath classes)
dog1.bark();
// connecting Lesson 17 and Lesson 18.
console.log(Object.getPrototypeOf(ahad) === User.prototype);

console.log(Object.getOwnPropertyNames(User.prototype));

// Constructor ≠ class
// The class is the overall blueprint/definition.
// The constructor is the special initialization method
// that runs when you do: new User(...)

// A class can have multiple methods
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    showBalance() {
        console.log(this.balance);
    }
}


