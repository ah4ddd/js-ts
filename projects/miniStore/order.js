import { InvalidOrderOperationError } from "./errors.js";

class Order {
    constructor(orderId, customer, items, discount = 0) {
        if (!customer) {
            throw new Error("Order requires a customer");
        }

        if (!items || items.length === 0) {
            throw new Error("Order requires at least one item");
        }

        this.orderId = orderId;
        this.customer = { ...customer };

        // Snapshot the cart items so later cart changes
        // don't change which items belong to this order.
        this.items = items.map(({ product, quantity }) => {
            const { id, name, price, category } = product;

            return {
                product: { id, name, price, category },
                quantity
            };
        });

        this.subtotal = this.items.reduce(
            (total, item) =>
                total + item.product.price * item.quantity,
            0
        );

        if (typeof discount !== "number" || discount < 0 || discount > this.subtotal) {
            throw new Error("Discount must be between 0 and the order subtotal");
        }

        this.discount = discount;
        this.total = this.subtotal - discount;

        this.status = "pending";
    }

    confirm() {
        if (this.status !== "pending") {
            throw new InvalidOrderOperationError(
                `Only pending orders can be confirmed. Current status: ${this.status}.`
            );
        }

        this.status = "confirmed";
    }

    cancel() {
        if (this.status === "cancelled") {
            throw new InvalidOrderOperationError(`Order ${this.orderId} is already cancelled.`);
        }

        if (this.status !== "pending") {
            throw new InvalidOrderOperationError(
                `Only pending orders can be cancelled. Current status: ${this.status}.`
            );
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
            status: this.status
        };
    }
}

export default Order;
