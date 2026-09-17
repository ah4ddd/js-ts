// Objects (key-value pair)

const user = {
    name: "Ahad",
    age: 21,
    email: "ahad@example.com",
    country: "India",
    isAdmin: true
};

// Accessing Properties
console.log(user.name);

if (user.isAdmin) {
    console.log(`Yes ${user.name} is Admin!`);
}

// Bracket Notation
console.log(user["country"])

// Dynamic Property Access
const property = "email"
console.log(user[property])











// Take the value currently stored at freq[num].
//  If it doesn't exist (or is falsy), use 0. Add 1 to that.
// Then assign the result back into freq[num]
const nums = [2, 2, 3];

const freq = {};

for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);
