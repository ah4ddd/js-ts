// Objects (key-value pair)

const user = {
    name: "Ahad",
    age: 21,
    email: "ahad@example.com",
    country: "India",
    isAdmin: true
};

console.log(user);

// Accessing Properties
console.log(user.name);

if (user.isAdmin) {
    console.log(`Yes ${user.name} is Admin!`);
}

// Bracket Notation
console.log(user["country"]);

// Dynamic Property Access
const property = "email";
console.log(user[property]);

// Changing Properties
user.age = 22;
console.log(user.age);

// Adding New Properties
user.career = "Software Engineer";
console.log(user.career);

// Deleting Properties
delete user.country;
console.log(user);

// Objects Can Store Anything

// Nested Onjects
user.address = {
    city: "Lucknow",
    country: "India"
};
console.log(user.address.city);

// Objects + Arrays
user.languages = ["Python", "JavaScript", "Go", "SQL"];
console.log(user.languages[1]);
// And the reverse is also possible:
const team = [
    {
        name: "Ahad",
        age: 21
    },
    {
        name: "Lia",
        age: 25
    }
];
console.log(team[0].name);

// Methods -> Function stored object property is commonly called method
user.greet = function (user) {
    console.log(`Hello ${user}!`);
}
user.greet(user.name);

// A Method Can Access the Object
// this.name refers to the name associated with the object in this method call\
// Objects can have methods, and methods can work with object data.
user.dream = function () {
    console.log(`${this.name} wants to be free`);
}
user.dream();

// Objects Are Going to Become Your Backend Bread and Butter
