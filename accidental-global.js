// Accidental globals are variables that become global unintentionally
// due to a lack of proper scoping or variable declaration using var, let, or const.

const foo = () => {
  y = 20;
};

foo();
console.log(y); // 20

const bar = () => {
  let x = (y = 0);
};

bar();
console.log(y); // 0
