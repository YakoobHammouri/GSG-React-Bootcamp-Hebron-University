/*

 demonstrates the concept of functions in JavaScript,
 including function declarations, function expressions, and nested functions.

The fun1() function is declared using function declaration syntax and 
logs "hi" to the console when called.

The fun2 variable is assigned a function expression, 
which is an anonymous function assigned to the variable.
It logs "hi2" to the console when called.

The fun3 constant is assigned the function referenced by fun2.
It is essentially another reference to the same function,
so calling fun3() will log "hi2" to the console.

The upper() function is declared and logs "upper" to the console.
It also contains a nested function called lower(), which logs "lower" to the console.

The upper() function returns the reference to the lower() function.

The newFun variable is assigned the returned value of upper(),
which is the reference to the lower() function.

When newFun() is called, it executes the lower() function, logging "lower" to the console.

*/

function fun1() {
  console.log("hi");
}

var fun2 = function () {
  console.log("hi2");
};

const fun3 = fun2;

fun3();

function upper() {
  console.log("upper");

  function lower() {
    console.log("lower");
  }
  return lower;
}

var newFun = upper();
console.log(newFun);
newFun();
