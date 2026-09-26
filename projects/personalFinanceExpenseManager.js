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

function totalExpense() {
    let total = 0;
    for (const expense of selectedUser.transactions) {
        if (expense.type === "expense") {
            total += expense.amount;
        }
    }
    return total;
}

console.log(`Total Income: ${totalIncome()}`);
console.log(`Total Expense: ${totalExpense()}`);
console.log(`Saved: ${totalIncome() - totalExpense()}`);

console.log("All Incomes:")

const userExpenses = selectedUser.transactions.filter(
    transaction => transaction.type === "expense"
)

const userIncome = selectedUser.transactions.filter(
    transaction => transaction.type === "income"
)

console.log();
console.log("All Incomes:", userIncome);
console.log("All Expenses:", userExpenses);

console.log("Total numbers of transactions:",
    userIncome.length + userExpenses.length);

console.log("Number of Income transactions:", userIncome.length);
console.log("Number of expense transactions:", userExpenses.length);

const ExpenseSum = userExpenses.reduce(
    function (total, transaction) {
        return total + transaction.amount;
    }, 0
);

console.log("Average expense:", ExpenseSum / userExpenses.length);


