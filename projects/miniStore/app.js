import Product from "./product.js";

const products = [
    new Product(1, "Laptop", 60000, "Electronics", 5),
    new Product(2, "Keyboard", 3000, "Accessories", 10),
    new Product(3, "Mouse", 1500, "Accessories", 20),
    new Product(4, "Monitor", 15000, "Electronics", 0),
    new Product(5, "Headphones", 5000, "Audio", 8)
];

// Find product by ID
const selectedProduct = products.find(
    product => product.id === 3
);

console.log(selectedProduct);

// Filter by category
const selectedCategory = products.filter(
    product => product.category === "Electronics"
);

console.log(selectedCategory);

// Find products below a certain price
const belowPrice = products.filter(
    product => product.price < 5000
);

console.log(belowPrice);

// Is any product out of stock?
const hasOutOfStock = products.some(
    product => product.stock === 0
);

console.log("Do we have an out-of-stock product?", hasOutOfStock);

// Do all products have stock?
const allHaveStock = products.every(
    product => product.stock > 0
);

console.log("Do all products have stock?", allHaveStock);

// Calculate total inventory value
const totalValue = products.reduce(
    (total, product) => {
        return total + product.price * product.stock;
    },
    0
);

console.log("Total inventory value:", totalValue);
