// Error Handling
// try...catch
// Instead of the error simply killing execution, the error is caught.
try {
    const result = JSON.parse("Hello");
    console.log(result);
} catch (error) {
    console.log("Something went wrong.")
}

