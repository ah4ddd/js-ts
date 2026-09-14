const age = 13;
const hasTicket = false;
const isVIP = false;

if (age >= 18 && hasTicket && isVIP) {
    console.log("You can enter VIP area");
} else if (age >= 18 && hasTicket) {
    console.log("You can enter");
} else if (age < 18 && hasTicket) {
    console.log("You can enter play area");
} else if (age <= 13 && !hasTicket && !isVIP) {
    console.log("Go home Kid")
} else if (!hasTicket) {
    console.log("Get the ticket first");
}

if (true) {
    console.log("YES");
}
if (1) { // Need a Boolean here, convert this value to true
    console.log("YES");
}

const username = "Ahad";
const isAdmin = true;

if (username && isAdmin) {
    console.log(`User is Admin: ${username}`);
} else if (username) {
    console.log(`Username exists: ${username}`);
} else {
    console.log("User does not exist.");
}
