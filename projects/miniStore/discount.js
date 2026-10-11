
function createDiscount(discountRate) {
    if (
        typeof discountRate !== "number" ||
        discountRate <= 0 ||
        discountRate > 1
    ) {
        throw new Error("Discount rate must be a number greater than 0 and at most 1");
    }

    return function (price) {
        if (typeof price !== "number" || price < 0) {
            throw new Error("Price must be a non-negative number");
        }

        return price - price * discountRate;
    };
}

export default createDiscount;
