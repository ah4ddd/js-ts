function createDiscount(discountRate) {
    if (
        typeof discountRate !== "number" ||
        discountRate <= 0 ||
        discountRate > 1
    ) {
        throw new Error("Discount rate must be a number greater than 0 and at most 1");
    }

    return function applyDiscount(amount) {
        if (typeof amount !== "number" || amount < 0) {
            throw new Error("Amount must be a non-negative number");
        }

        return amount - amount * discountRate;
    };
}

export default createDiscount;
