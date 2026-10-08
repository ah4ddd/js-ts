class Product {
    constructor(id, name, price, category, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.catagory = category;
        this.stock = stock;
    }
    restock(quantity) {
        this.stock += quantity
    }
    sell(quantity) {
        this.stock -= quantity
    }
}

