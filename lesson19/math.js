// `export`
// This thing is available to other modules
export const add = (a, b) => {
    return a + b;
};

// Inline export
export const substract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
}

// Export at bottom
export { multiply }

// Modules have their own scope
// The module's internal variables stay inside that module
// unless explicitly exported.
// This is basically encapsulation
const secret = 45;
console.log(secret)
