class StoreError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class InvalidQuantityError extends StoreError {
    constructor(quantity) {
        super(`Invalid quantity: ${quantity}. Quantity must be a positive whole number.`);
    }
}

class ProductNotFoundError extends StoreError {}

class InsufficientStockError extends StoreError {
    constructor(product, requested, available) {
        const productName = product && product.name ? product.name : "product";
        super(`Insufficient stock for ${productName}. Requested: ${requested}, Available: ${available}.`);
        this.requested = requested;
        this.available = available;
    }
}

class InvalidOrderOperationError extends StoreError {}

export {
    StoreError,
    InvalidQuantityError,
    ProductNotFoundError,
    InsufficientStockError,
    InvalidOrderOperationError
};

export default StoreError;
