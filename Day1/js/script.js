//== vs ===
console.log("==", "2" == 2); // true
console.log("==", "2" === 2); // false

// template literals
const name = "yakoob";
console.log("hi" + " am " + name);
console.log(`hi  i am ${name}`);
console.log(`hi name is ${name} is ${name === "yakoob" ? 170 : "unknown"} cm`);

function templateName(n) {
  return `Hi .. ${n}`;
}

const names = ["yakoob", "mohammed", "ali", "ahmed", "sara"].map(templateName);

console.log("names", names);
