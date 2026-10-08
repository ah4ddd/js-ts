import Product from "./product.js";

const products = [
    new Product(1, "Laptop", 60000, "Electronics", 5),
    new Product(2, "Keyboard", 3000, "Accessories", 10),
    new Product(3, "Mouse", 1500, "Accessories", 20),
    new Product(4, "Monitor", 15000, "Electronics", 0),
    new Product(5, "Headphones", 5000, "Audio", 8)
];

const selectedUserId = 3;

const selectedProduct = products.find(
    id => id.id === selectedUserId
);

console.log(selectedProduct);
