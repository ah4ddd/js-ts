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
// Dog is an object. Animal is another object. Dog's prototype is animal.
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

// THIS explains something i've already been using
// inside your array -> map, filter, reduce...
// So where did those methods come from ?
// 💥 Array prototypes.

// same with strings
// JavaScript provides them through the string machinery/prototype.
const userName = "Ahad";
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.includes("A"));

// Object is the built-in constructor/function.
// Object.prototype is the object used as the prototype for ordinary objects.
// And Object.prototype provides common methods inherited by ordinary objects.

// The toolbox is the prototype.
// The tools inside it are methods.


// A prototype chain can be longer
const livingThing = {
    breathe() {
        console.log("Breathing...")
    }
};

const pet = Object.create(livingThing);

pet.eat = function () {
    console.log("Eating...")
};

const cow = Object.create(pet);
// cow doesn't actually contain either method
// Yet cow can use both because JavaScript keeps walking upward
// until it finds the requested property.
cow.eat();
cow.breathe();

// Property lookup vs scope lookup
// For variables: JavaScript uses the scope chain.
// For object properties: JavaScript uses the prototype chain when necessary.

/*
PROPERTY LOOKUP

object
  │
  ├── Has property? ── YES → use it
  │
  └── NO
       ↓
    prototype
       │
       ├── Has property? ── YES → use it
       │
       └── NO
            ↓
         prototype's prototype
            ↓
           ...
            ↓
           null
*/
