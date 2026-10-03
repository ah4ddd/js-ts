// LESSON 17 — PROTOTYPES
// Where does JavaScript actually look when you ask for
// a property or method that isn't directly inside the object?

// A prototype is an object that another object
// can inherit properties and methods from.

const animal = {
    name: "Animal",
    eat() {
        console.log(this.name, "Eating...")
    }
};

// It creates a new object whose prototype is the object you provide.
// doesn't modify animal. It gives dog its own property
const dog = Object.create(animal);

dog.eat();

// returns the object stored in animal
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(dog) === animal);

// This is where lookup gets REALLY important
const cat = Object.create(animal);
cat.name = "Iris";

console.log(cat.name);
cat.eat();
