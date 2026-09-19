// Spread Syntax & Rest Parameters ...

// SPREAD = "open this thing up"
const nums = [1, 2, 3];
console.log(nums); // [1, 2, 3]
// Take the elements inside nums and spread them here.
const newNums = [...nums];
console.log(newNums); // 1, 2, 3
console.log([...nums, ...nums]);

// REST -> Rest is almost the opposite idea.
// Take all the remaining arguments and
// collect them into an array called numbers.
function add(...numbers) {
    console.log(numbers);
}
// Take all the remaining arguments and collect them into an array called nums
add(10, 20, 30, 40);

function greet(firstName, ...others) {
    console.log(firstName);
    console.log(others);
}

greet("Ahad", "Ali", "John", "Mike");

