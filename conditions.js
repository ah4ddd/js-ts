// Conditions

const age = 18;
const hasTicket = false;
const isVIP = true;

if (age >= 18 && hasTicket && isVIP) {
    console.log("You can enter VIP area");
} else if (age >= 18 && hasTicket) {
    console.log("You can enter public area");
} else if (age < 18 && hasTicket) {
    console.log("You can enter play area");
} else if (age <= 13 && !hasTicket && !isVIP) {
    console.log("Go home Kid")
} else {
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
const isOwner = true;

if (username && isAdmin) {
    console.log(`User is Admin: ${username}`);
} else if (username) {
    console.log(`Username exists: ${username}`);
} else {
    console.log("User does not exist.");
}


if (isAdmin || isOwner) {
    console.log("Access granted");
}
