class Cart {
    constructor() {
        this.items = [

        ];
    }

    addProduct(product, quantity) {
        if (!product) {
            throw new Error("Product is required");
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Quantity must be positive integer")
        }
    }

    removeProduct(productId) {
        // Your logic
    }

    getTotal() {
        // Use reduce()
    }

    getItemCount() {
        // Use reduce()
    }
}

export default Cart;
