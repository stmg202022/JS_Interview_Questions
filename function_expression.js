//anonymous function expression //
const add = function (x, y) {
  return x + y;
};

console.log(add(3, 5)); // Outputs: 8  // can call directly from outside

//named function expression
const fact = function calfact(x) {
  if (x <= 1) {
    return 1;
  }

  return x * calfact(x - 1);
};
console.log(fact(5)); // 120  // here calfact function is not calling directly from outside

//named function expression
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

const factorialResult = factorial(5);
console.log(factorialResult); //output: 120 // can not call factorial function directly outside it
