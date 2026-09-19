// Spread Syntax & Rest Parameters ...

// SPREAD = "open this thing up"
const nums = [1, 2, 3];
console.log(nums); // [1, 2, 3]

const newNums = [...nums];
console.log(newNums); // 1, 2, 3
console.log([...nums, ...nums]);

// REST -> Rest is almost the opposite idea.
