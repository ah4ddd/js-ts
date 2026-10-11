import Product from "./product.js";
import Customer from "./customer.js";

const products = [
    new Product(1, "Laptop", 60000, "Electronics", 5),
    new Product(2, "Keyboard", 3000, "Accessories", 10),
    new Product(3, "Mouse", 1500, "Accessories", 20),
    new Product(4, "Monitor", 15000, "Electronics", 0),
    new Product(5, "Headphones", 5000, "Audio", 8)
];

const customers = [
    new Customer(1, "Ahad", "ahad@example.com")
];

function findProductById(productId) {
    return products.find(({ id }) => id === productId);
}

function filterProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function findProductsBelowPrice(priceLimit) {
    return products.filter(({ price }) => price < priceLimit);
}

function hasOutOfStockProduct() {
    return products.some(({ stock }) => stock === 0);
}

function allProductsHaveStock() {
    return products.every(({ stock }) => stock > 0);
}

function calculateInventoryValue() {
    return products.reduce(
        (total, { price, stock }) => total + price * stock,
        0
    );
}

function findHighestPricedProduct() {
    return products.reduce(
        (highest, product) => product.price > highest.price ? product : highest,
        products[0]
    );
}

export {
    products,
    customers,
    findProductById,
    filterProductsByCategory,
    findProductsBelowPrice,
    hasOutOfStockProduct,
    allProductsHaveStock,
    calculateInventoryValue,
    findHighestPricedProduct
};

export const customer = customers[0];
