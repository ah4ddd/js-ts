// FIRST JAVASCRIPT PROJECT
// Mini User Profile Manager

console.log("====== USER PROFILE ======")

const user = {
    name: "Ahad",
    age: 21,
    country: "India",
    role: "Software Developer",
    skills: ["Python", "JavaScript", "SQL"],
    isEmployed: false
};

const { name, age, country, role, skills, isEmployed } = user;

console.log(`Hello, ${name}!`);
console.log(`You are ${age} old`);

if (age > 18) {
    console.log("User is adult!");
}

skills.push("TypeScript");

user.age += 1;

console.log(`Numbers of skills: ${skills.length}`);

for (let i = 0; i < skills.length; i++) {
    console.log(`Skill: ${skills[i]}`);
}

if (!isEmployed) {
    console.log("Status: Currently unemployed");
} else {
    console.log("Status: Employed");
}

user.introduce = function introduce() {
    console.log(`Hi i am ${this.name}, I'm ${this.age} years old, and I know ${this.skills.length} programming languages.`);
}

user.introduce();

console.log(user);
console.log("==========================")
