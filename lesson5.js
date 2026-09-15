// Operators & Expressions

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(2 ** 3);

let score = 100;
score *= 10

console.log(score)

// Increment
let count = 0;
console.log(count++); // 0 cos: Use the current value, then increment.
count++; // count = count + 1 or count += 1
console.log(count)

let subs = 5
console.log(--subs); // Increment first, then use the value.
subs--; // subs = subs - 1 or subs -= 1
console.log(subs)

// Operator Precedence
console.log(10 + 5 * 2); // 20 because multiplication happens before addition.

console.log((10 + 5) * 2); // 30 > Parentheses override it


