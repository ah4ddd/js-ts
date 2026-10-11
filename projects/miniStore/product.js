import {
    InvalidQuantityError,
    InsufficientStockError
} from "./errors.js";

function validateQuantity(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new InvalidQuantityError(quantity);
    }
}

class Product {
    constructor(id, name, price, category, stock) {
        if (typeof price !== "number" || price < 0) {
            throw new Error("Product price must be a non-negative number");
        }

        if (!Number.isInteger(stock) || stock < 0) {
            throw new Error("Product stock must be a non-negative whole number");
        }

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }

    restock(quantity) {
        validateQuantity(quantity);
        this.stock += quantity;
    }

    sell(quantity) {
        validateQuantity(quantity);

        if (quantity > this.stock) {
            throw new InsufficientStockError(this, quantity, this.stock);
        }

        this.stock -= quantity;
    }

    getInfo() {
        const { id, name, price, category, stock } = this;

        return { id, name, price, category, stock };
    }
}

export default Product;
