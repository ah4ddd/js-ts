// Loops

/*
FOR:
    for (initialization; condition; update) {
        body
    }

WHILE:
    while (condition) {
        body
    }
*/

// Part 1 — Initialization -> let i = 0 . Create i and start at 0.

// Part 2 — Condition -> i < 5 Before every iteration,
// JavaScript asks: Is this still true?

// Part 3 — Update -> i++
// After each iteration: Increase i by 1.


for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log();

// Counting Differently
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

console.log();

//Increment by 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log();

// Count Backwards
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log()

// While loop
let i = 0;
while (i < 5) {
    console.log(i)
    i++;
}

console.log()

/*
The Classic Infinite Loop

This is dangerous:
    let i = 0;

    while (i < 5) {
        console.log(i);
    }

The missing piece is:
i++;
*/

console.log()

// break -> kill the entire loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log()

// Continue -> Skip the rest of this iteration, then move to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue
    }
    console.log(i);
}

console.log()

// Nested Loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j)
    }
}

//console.log(j) -> error Because: let j is block-scoped,
// The j belongs to the for block
