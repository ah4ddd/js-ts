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
        const existingItem = this.items.find(
            item => item.product.id === product.id
        );
        const currentQuantity = existingItem ? existingItem.quantity : 0;
        const newQuantity = currentQuantity + quantity;

        if (newQuantity > product.stock) {
            throw new Error("Not enough stock");
        }
        if (existingItem) {
            existingItem.quantity = newQuantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeProduct(productId) {
        const index = this.items.findIndex(
            item => item.product.id === productId
        );

        if (index === -1) {
            throw new Error("Product not found in cart");
        }
        this.items.splice(index, 1);
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    }

    getItemCount() {
        return this.items.reduce(
            (count, item) => count + item.quantity,
            0
        );
    }
}

export default Cart;
