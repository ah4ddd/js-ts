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

const category = "Electronics";

const selectedCategory = products.filter(
    product => product.category === category
);

console.log(selectedCategory);

const belowPrice = products.filter(
    below => below.price < 5000
);

console.log(belowPrice);

const audioProduct = products.some(
    product => product.category === "Audio"
);

console.log("Do we have audio product ?", audioProduct);
