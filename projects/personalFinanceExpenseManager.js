const { send } = require("express/lib/response");

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
            description: "Just living"
        },
        {
            id: 1,
            type: "expense",
            amount: 1500,
            category: "Transport",
            description: "here and there"
        },
        {
            id: 1,
            type: "expense",
            amount: 3500,
            category: "Bills",
            description: "Gas, Internet, electricity, etc"
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
console.log();

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
console.log();

const largestExpense = userExpenses.reduce(
    function (largest, transaction) {
        if (transaction.amount > largest.amount) {
            return transaction;
        }
        return largest;
    },
    userExpenses[0]
);

console.log("Largest Expense:");
console.log(largestExpense.amount);
console.log(largestExpense.category);
console.log(largestExpense.description);
console.log();

const smallestExpense = userExpenses.reduce(
    function (smallest, transaction) {
        if (transaction.amount < smallest.amount) {
            return transaction;
        }
        return smallest;
    },
    userExpenses[0]
);

console.log("Smallest Expense:");
console.log(smallestExpense.amount);
console.log(smallestExpense.category);
console.log(smallestExpense.description);
