import Cart from "./cart.js";
import createDiscount from "./discount.js";
import Order from "./order.js";
import {
    customer,
    products,
    findProductById,
    filterProductsByCategory,
    findProductsBelowPrice,
    hasOutOfStockProduct,
    allProductsHaveStock,
    calculateInventoryValue,
    findHighestPricedProduct
} from "./data.js";
import {
    ProductNotFoundError,
    InsufficientStockError
} from "./errors.js";

const reportWidth = 56;
const handledErrors = [];

function formatCurrency(amount) {
    return `₹${amount.toLocaleString("en-IN")}`;
}

function printLines(...lines) {
    lines.forEach(line => console.log(line));
}

function printHeader(title) {
    printLines(
        "=".repeat(reportWidth),
        title.padStart((reportWidth + title.length) / 2),
        "=".repeat(reportWidth)
    );
}

function printSection(title) {
    printLines("", title, "-".repeat(reportWidth));
}

function yesNo(value) {
    return value ? "Yes" : "No";
}

function recordHandledError(label, action) {
    try {
        action();
    } catch (error) {
        handledErrors.push({
            label,
            message: error.message
        });
    }
}

function getProductOrThrow(productId) {
    const product = findProductById(productId);

    if (!product) {
        throw new ProductNotFoundError(`Product ID ${productId} does not exist in inventory`);
    }

    return product;
}

function addToCartById(cart, productId, quantity) {
    const product = getProductOrThrow(productId);
    cart.addProduct(product, quantity);
}

function checkout(cart, checkoutCustomer, discountCalculator) {
    if (cart.getItemCount() === 0) {
        throw new Error("Cannot checkout an empty cart");
    }

    const checkoutItems = cart.getItems();

    checkoutItems.forEach(({ product, quantity }) => {
        if (quantity > product.stock) {
            throw new InsufficientStockError(product, quantity, product.stock);
        }
    });

    checkoutItems.forEach(({ product, quantity }) => {
        product.sell(quantity);
    });

    const subtotal = cart.getTotal();
    const discountedTotal = discountCalculator(subtotal);
    const discount = subtotal - discountedTotal;

    return new Order(1001, checkoutCustomer, checkoutItems, discount);
}

const cart = new Cart();

const tenPercentOff = createDiscount(0.10);
const selectedProduct = findProductById(3);
const electronics = filterProductsByCategory("Electronics");
const belowPrice = findProductsBelowPrice(5000);
const hasOutOfStock = hasOutOfStockProduct();
const allHaveStock = allProductsHaveStock();
const initialInventoryValue = calculateInventoryValue();
const highestPricedProduct = findHighestPricedProduct();

addToCartById(cart, 1, 1);
addToCartById(cart, 3, 2);
addToCartById(cart, 2, 1);
addToCartById(cart, 5, 1);
cart.removeProduct(5);

recordHandledError("Invalid quantity", () => addToCartById(cart, 2, 0));
recordHandledError("Missing product", () => addToCartById(cart, 999, 1));
recordHandledError("Insufficient stock", () => addToCartById(cart, 5, 99));
recordHandledError("Remove missing cart item", () => cart.removeProduct(4));

const order = checkout(cart, customer, tenPercentOff);
order.confirm();

recordHandledError("Invalid order operation", () => order.cancel());

const orderSummary = order.getSummary();

printHeader("MINI STORE");

printSection("CUSTOMER");
printLines(
    `Name: ${customer.name}`,
    `Email: ${customer.email}`
);

printSection("INVENTORY CHECKS");
printLines(
    `Find product ID 3: ${selectedProduct.name} (${formatCurrency(selectedProduct.price)})`,
    `Electronics: ${electronics.map(({ name }) => name).join(", ")}`,
    `Below ${formatCurrency(5000)}: ${belowPrice.map(({ name }) => name).join(", ")}`,
    `Any product out of stock: ${yesNo(hasOutOfStock)}`,
    `All products have stock: ${yesNo(allHaveStock)}`,
    `Initial inventory value: ${formatCurrency(initialInventoryValue)}`,
    `Highest-priced product: ${highestPricedProduct.name}`
);

printSection("CART");
orderSummary.items.forEach(({ product, quantity }) => {
    const itemTotal = product.price * quantity;
    console.log(
        `${product.name.padEnd(14)} x ${String(quantity).padEnd(3)} ${formatCurrency(itemTotal)}`
    );
});

printLines(
    "",
    `Total items: ${cart.getItemCount()}`,
    `Subtotal: ${formatCurrency(orderSummary.subtotal)}`,
    `Discount (10%): ${formatCurrency(orderSummary.discount)}`,
    `Final total: ${formatCurrency(orderSummary.total)}`
);

printSection("ORDER");
printLines(
    `Order ID: ${orderSummary.orderId}`,
    `Status: ${orderSummary.status.toUpperCase()}`
);

printSection("HANDLED ERRORS");
handledErrors.forEach(({ label, message }) => {
    console.log(`${label}: ${message}`);
});

printSection("STOCK AFTER CHECKOUT");
products.forEach(({ name, stock }) => {
    console.log(`${name.padEnd(14)} ${stock}`);
});

printLines("", "=".repeat(reportWidth));
