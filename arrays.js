// Arrays

const fruits = ["apple", "banana", "orange"];

// Indexing
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[1]);

// Chaning an Element (mutation)
fruits[1] = "mango";
console.log(fruits[1]);

// .length
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

// Adding Elements
fruits.push("kiwi");
fruits.push("fig")
console.log(fruits[3]);

// Removing From the End
console.log(fruits);
fruits.pop();
console.log(fruits);

// Add to Beginning
console.log(fruits);
fruits.unshift("cherry");
console.log(fruits);

// Remove From Beginning
fruits.shift();
console.log(fruits);

/*
push()      → add end
pop()       → remove end

unshift()   → add beginning
shift()     → remove beginning
*/

// Arrays Can Contain Different Types
const data = [
    "Ahad",
    21,
    true,
    null
];

// Arrays Can Contain Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]);
console.log(matrix[2][2]);

// Looping Through an Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

console.log();

// for...of
for (const fruit of fruits) {
    console.log(fruit);
}

console.log();

// while
let i = 0
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;

}

console.log()

// for...in (Index/Keys)
for (const index in fruits) {
    console.log(index);
}
