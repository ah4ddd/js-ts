import {
    InvalidQuantityError,
    ProductNotFoundError,
    InsufficientStockError
} from "./errors.js";

function validateQuantity(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new InvalidQuantityError(quantity);
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        if (!product) {
            throw new ProductNotFoundError("Product is required before it can be added to the cart");
        }

        validateQuantity(quantity);

        const existingItem = this.items.find(
            item => item.product.id === product.id
        );

        let currentQuantity;
        if (existingItem) {
            currentQuantity = existingItem.quantity;
        } else {
            currentQuantity = 0;
        }

        const newQuantity = currentQuantity + quantity;

        if (newQuantity > product.stock) {
            throw new InsufficientStockError(product, newQuantity, product.stock);
        }

        if (existingItem) {
            existingItem.quantity = newQuantity;
        } else {
            this.items = [...this.items, { product, quantity }];
        }
    }

    removeProduct(productId) {
        const index = this.items.findIndex(
            item => item.product.id === productId
        );

        if (index === -1) {
            throw new ProductNotFoundError(`Product ID ${productId} is not in the cart`);
        }

        this.items.splice(index, 1);
    }

    getTotal() {
        return this.items.reduce(
            (total, item) =>
                total + item.product.price * item.quantity,
            0
        );
    }

    getItemCount() {
        return this.items.reduce(
            (count, item) => count + item.quantity,
            0
        );
    }

    getItems() {
        return this.items.map(({ product, quantity }) => ({
            product,
            quantity
        }));
    }
}

export default Cart;
