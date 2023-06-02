/*
Arrow functions in JavaScript provide a concise syntax for writing functions.
Arrow functions have a shorter syntax compared to traditional function declarations or expressions.
 The basic syntax of an arrow function is as follows:
*/

const functionName = (parameter1, parameter2) => {
  // Function body
  // Return statement (optional)
};

// Normal Function
function square(x) {
  return x * x;
}
function greet(name) {
  return `Hello, ${name}!`;
}

function sum(a, b) {
  return a + b;
}

function doubleArray(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

function isEven(num) {
  return num % 2 === 0;
}

function multiply(a, b = 1) {
  return a * b;
}
function calculateCircleArea(radius) {
  const pi = 3.14159;
  return pi * radius * radius;
}

// Arrow Function
const squareArrow = (x) => x * x;

const greetArrow = (name) => `Hello, ${name}!`;

const sumArrow = (a, b) => a + b;

const doubleArrayArrow = (arr) => arr.map((num) => num * 2);

const isEvenArrow = (num) => num % 2 === 0;

const multiplyArrow = (a, b = 1) => a * b;

const calculateCircleAreaArrow = (radius) => {
  const pi = 3.14159;
  return pi * radius * radius;
};
