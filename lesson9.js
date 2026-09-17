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

// Methods
user.greet = function (user) {
    console.log(`Hello ${user}!`);
}
user.greet(user.name);

//

// Take the value currently stored at freq[num].
//  If it doesn't exist (or is falsy), use 0. Add 1 to that.
// Then assign the result back into freq[num]
const nums = [2, 2, 3];

const freq = {};

for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);
