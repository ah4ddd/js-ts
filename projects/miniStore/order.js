class Order {
    constructor(orderId, customer, items, discountRate = 0) {
        this.orderId = orderId;
        this.customer = customer;

        // Snapshot the cart items so later cart changes
        // don't change which items belong to this order.
        this.items = items.map(item => ({
            product: item.product,
            quantity: item.quantity
        }));

        this.subtotal = this.items.reduce(
            (total, item) =>
                total + item.product.price * item.quantity,
            0
        );

        this.discountRate = discountRate;
        this.discount = this.subtotal * discountRate;
        this.total = this.subtotal - this.discount;

        this.status = "pending";
        this.createdAt = new Date();
    }

    confirm() {
        if (this.status !== "pending") {
            throw new Error("Only pending orders can be confirmed");
        }

        this.status = "confirmed";
    }

    cancel() {
        if (this.status !== "pending") {
            throw new Error("Only pending orders can be cancelled");
        }

        this.status = "cancelled";
    }

    getSummary() {
        return {
            orderId: this.orderId,
            customer: this.customer,
            items: this.items,
            subtotal: this.subtotal,
            discount: this.discount,
            total: this.total,
            status: this.status,
            createdAt: this.createdAt
        };
    }
}

export default Order;
