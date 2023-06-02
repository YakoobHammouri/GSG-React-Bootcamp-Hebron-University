function multiplyArrayFun() {
  const arr = [1, 2, 3, 4, 5, 6];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * arr[i];
    arr2.push(result);
  }
  return arr2;
}

const newMultiplyArray = multiplyArrayFun();
console.log("newMultiplyArray : ", newMultiplyArray);

function calculateOdd(oldArray) {
  // check if oldArray is null or undefined
  if (!oldArray) return;

  // declare new array
  const newOld = [];
  for (let i = 0; i < oldArray.length; i++) {
    if (oldArray[i] % 2 !== 0) {
      newOld.push(oldArray[i]);
    }
  }
  return newOld;
}

const newOddArray = calculateOdd(newMultiplyArray);

console.log("newOddArray :", newOddArray);

function is_even(number) {
  return number % 2 == 0;
}
function is_odd(number) {
  return number % 2 !== 0;
}

function filter(arr, fun) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) new_arr.push(arr[i]);
  }
  return new_arr;
}

even_elements = filter([1, 2, 3, 4, 5], is_odd);
console.log(even_elements);

function multiply(val) {
  return val * val;
}
function double(x) {
  return 2 * x;
}
function triple(x) {
  return 3 * x;
}
function check(x) {
  return x > 3;
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const multiplyArray = arr.map(multiply);
console.log("multiplyArray :>> ", multiplyArray);

const newOldArray = multiplyArray.filter(is_odd);

console.log("newOldArray :>> ", newOldArray);

const prices = [1, 2, 3, 4, 5, 6];
console.log("prices :>> ", prices);
const y = prices.filter(check);
console.log("y :>> ", y);
const double_elements = prices.map(triple);

console.log("double_elements :>> ", double_elements);
