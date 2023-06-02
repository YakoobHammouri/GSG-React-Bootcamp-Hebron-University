// Global scope variable (accessible throughout the code)
var globalVar = 'I am a global variable';
let globalLet = 'I am also a global variable';
const globalConst = 'I am a global constant';

function exampleFunction() {
  // Function scope variable
  var functionVar = 'I am a function variable';
  let functionLet = 'I am also a function variable';
  const functionConst = 'I am a function constant';

  if (true) {
    // Block scope variable
    var blockVar = 'I am a block variable (var)';
    let blockLet = 'I am a block variable (let)';
    const blockConst = 'I am a block constant (const)';

    console.log(blockVar); // Output: I am a block variable (var)
    console.log(blockLet); // Output: I am a block variable (let)
    console.log(blockConst); // Output: I am a block constant (const)
  }

  console.log(blockVar); // Output: I am a block variable (var)
  console.log(blockLet); // Output: ReferenceError: blockLet is not defined
  console.log(blockConst); // Output: ReferenceError: blockConst is not defined

  console.log(functionVar); // Output: I am a function variable (var)
  console.log(functionLet); // Output: I am also a function variable (let)
  console.log(functionConst); // Output: I am a function constant (const)
}

console.log(globalVar); // Output: I am a global variable
console.log(globalLet); // Output: I am also a global variable
console.log(globalConst); // Output: I am a global constant

console.log(functionVar); // Output: ReferenceError: functionVar is not defined
console.log(functionLet); // Output: ReferenceError: functionLet is not defined
console.log(functionConst); // Output: ReferenceError: functionConst is not defined

console.log(blockVar); // Output: ReferenceError: blockVar is not defined
console.log(blockLet); // Output: ReferenceError: blockLet is not defined
console.log(blockConst); // Output: ReferenceError: blockConst is not defined


/*

var, let, and const in different scopes:

globalVar, globalLet, and globalConst are declared in the global scope,
making them accessible throughout the code.

functionVar, functionLet, and functionConst are declared within the exampleFunction,
making them accessible only within the function's scope.

blockVar, blockLet, and blockConst are declared within an if block inside exampleFunction,
making them accessible only within that block's scope.

The key differences between var, let, and const are related to their scoping behavior and mutability:

The var has function scope or global scope, 
which means it is accessible throughout the function or globally.
It can be redeclare and reassigned.

let and const have block scope, which means they are accessible only 
within the block they are declared in (e.g., a loop, an if statement).
They have block-level scope and cannot be accessed outside of the block.
let allows re assignment, while const variables are read-only and cannot be reassigned after initialization.
const variables are also constants, meaning their values cannot be changed after initialization. 
They are ideal for declaring variables that should remain constant throughout the

*/