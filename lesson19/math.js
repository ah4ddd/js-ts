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
