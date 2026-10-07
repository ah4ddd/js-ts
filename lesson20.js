// Error Handling
// try...catch
// Instead of the error simply killing execution, the error is caught.
// error is a variable containing information about the error that was thrown.

console.log("Start");

try {
    const result = JSON.parse("Hello");
    console.log(result);
} catch (error) {
    console.log(error.name);
}

console.log("End");
