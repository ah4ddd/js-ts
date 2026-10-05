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
    // Classes can have getters
    get info() {
        return `${this.name}, ${this.age}`;
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
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is Eating...`)
    }
}

const cat = new Animal("Misa", 2);
const rabbit = new Animal("Iris", 4);

// Dog.prototype (That's prototypes underneath classes)
cat.eat();
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
        console.log("Total Balance:", this.balance);
    }
}

const account = new BankAccount("Ahad", 10000);

// The methods are shared through: BankAccount.prototype
account.deposit(5000);
account.withdraw(2000);
account.showBalance();

// A getter behaves like a property while executing a function underneath.
console.log(ahad.info);

// Inheritance
// extends creates the inheritance relationship
// basically establishes that Dog inherits from Animal.
// Now Dog can have its own methods
class Dog extends Animal {
    bark() {
        console.log(this.name, "woofs")
    }
}

// PROTOTYPE CHAIN
const dog = new Dog("Lion", 1);
dog.eat();
dog.bark();
