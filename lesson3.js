const age = 17;

if (age < 13){
	console.log("Child");
} else if (age < 18){
	console.log("Teen");
} else {
	console.log("Adult");
}


if (true) {
	console.log("YES");
}
if (1) { // Need a Boolean here, convert this value to true
	console.log("YES");
}

const username = "";

if (username) {
	console.log(`Username exists: ${username}`);
} else {
	console.log("User does not exist");
}
