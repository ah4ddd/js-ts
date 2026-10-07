// Error Handling
// try...catch
// Instead of the error simply killing execution, the error is caught.
// error is a variable containing information about the error that was thrown.
// finally runs regardless. That's useful for cleanup.

console.log("Start");
console.log("Trying...")

try {
    const result = JSON.parse("Hello");
    console.log(result);
} catch (error) {
    console.log(error.name);
} finally {
    console.log("Always runs")
}

console.log("Finished.");

// You can throw errors yourself
function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient funds")
    }
    return balance - amount;
}

// throw + catch
try {
    const result = withdraw(1000, 5000);
    console.log(result);
} catch (error) {
    console.log(error.message);
}
