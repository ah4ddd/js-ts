class Customer {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getProfile() {
        const { id, name, email } = this;

        return { id, name, email };
    }
}

export default Customer;
