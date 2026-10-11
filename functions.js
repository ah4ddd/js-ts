// Functions f(x)
// Reusable block of code that can be called to perform a task.

/*
DEFINE      PARAMETER
  ↓             ↓
function greet(username) {
    console.log(`Hello ${username}`);
}
  ↓
CALL ARGUMENT
  ↓     ↓
greet("Ahad")
  ↓
execute body
*/

function greet(username) {
    console.log(`Hello ${username}`);
}

greet("Ahad")


// Multiple Parameters
function add(a, b) {
    console.log(a + b);
}

add(17, 13)

//return
function subs(a, b) {
    return a - b;
}

console.log(subs(17, 7));

const result = subs(100, 89);
console.log(result);

// return Immediately Exits the Function
function test() {
    console.log("A");
    return;
    console.log("B");
}

test();

// Functions Can Return Anything
// A function can encapsulate a piece of logic and give you a value.

// A Function Can Be Used Inside Another Expression
function mult(a, b) {
    return a * b;
}

const multiply = mult(10, 5) / 2;

console.log(multiply)


// Arrow Functions
const div = (a, b) => a / b;

console.log(div(13, 9))
