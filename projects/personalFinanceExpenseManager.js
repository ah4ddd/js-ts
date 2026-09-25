const user = {
    id: 1,
    userName: "Ahad",
    age: 21,

    transactions: [
        {
            id: 1,
            type: "income",
            amount: 50000,
            category: "Salary",
            description: "Monthtly salary"
        },
        {
            id: 1,
            type: "income",
            amount: 10000,
            category: "Freelance",
            description: "Gig work"
        },
        {
            id: 1,
            type: "expense",
            amount: 5000,
            category: "Investing",
            description: "SIP"
        },
        {
            id: 1,
            type: "expense",
            amount: 8000,
            category: "Groceries",
            description: "Just survival"
        },
        {
            id: 1,
            type: "expense",
            amount: 2000,
            category: "Eating out",
            descriiption: "Just living"
        },
        {
            id: 1,
            type: "expense",
            amount: 1500,
            category: "Transport",
            descriiption: "here and there"
        },
        {
            id: 1,
            type: "expense",
            amount: 3500,
            category: "Bills",
            descriiption: "Gas, Internet, electricity, etc"
        }

    ]
};

const selectUserId = 1;
const users = [user];

const selectedUser = users.find(
    user => user.id === selectUserId
);

function totalIncome() {
    let total = 0;
    for (const transaction of selectedUser.transactions) {
        if (transaction.type === "income") {
            total += transaction.amount;
        }
    }
    return total;
}

console.log(`Total Income: ${totalIncome()}`);
