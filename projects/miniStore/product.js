class Product {
    constructor(id, name, price, category, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }

    restock(quantity) {
        this.stock += quantity;
    }

    sell(quantity) {
        if (quantity > this.stock) {
            throw new Error("Not enough stock");
        }

        this.stock -= quantity;
    }
}
