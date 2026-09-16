// Loops

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

// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue
