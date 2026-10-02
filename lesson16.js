// LESSON 16 — this
// `this` refers to the object that is calling the function
// when the function is called as an object method.

// this is NOT determined by where the function is written.
// For a normal function, this is primarily determined by how the function is called.

// `this` refers to user -> this.name means user.name
// The call site determines `this`
// this → object, this → user
const user = {
    name: "Ahad",

    greet() {
        console.log(this.name);
    }
};
user.greet();


// The same function is being used by two objects.
// The function itself didn't change.
// It's the call site that changes what `this` refers to.
const user1 = {
    name: "Ahad",
    greet() {
        console.log(this.name);
    }
};

const user2 = {
    name: "John",
    greet: user1.greet
};

user1.greet();
user2.greet();

// The same function can have different this
function introduce() {
    console.log(this.name);
}

const ahad = {
    name: "Ahad"
};

const john = {
    name: "John"
};

const siya = {
    name: "Siya"
};

// new property called introduce to the ahad object.
ahad.introduce = introduce;
john.introduce = introduce;

ahad.introduce();
john.introduce();

// `this` with multiple properties
const user3 = {
    name: "Ahad",
    age: 21,
    city: "Lucknow",

    introduce() {
        console.log(`My name is ${this.name}.`);
        console.log(`I am ${this.age} years old.`)
        console.log(`I live in ${this.city}.`)
    },
    // `this` can modify object too
    birthday() {
        this.age++;
    },
    // `this` and parameters
    saysomethin(message) {
        console.log(this.name);
        console.log(message);
    }
}

user3.introduce();
user3.birthday();

console.log(user3.age);

// This makes methods powerful
// The methods can operate on the object that called them.
const bankAccount = {
    balance: 10000,
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        this.balance -= amount;
    }
};

bankAccount.deposit(18000);
bankAccount.withdraw(8000);

console.log(bankAccount.balance);

user3.saysomethin("Guten Morgen");

// this → who is calling me?
// parameter → what data was passed to me?

// with arrow function It does not create its own this.
// Instead, it uses the this from the surrounding lexical environment.
// the arrow function preserves the surrounding `this`
const user4 = {
    name: "Ahad",

    greet() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

user4.greet();
