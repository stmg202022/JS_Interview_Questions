// ##1> Explain the event loop in JavaScript and how it handles asynchronous operations.

//it is used to enable the asynchronous  programming.
//code remain responsive and non-blocking

//to understant it we should have to know
//call stack => track of function and added to the top of the stack
//callback queue => hold callback function(setInterval, setTimeOut, network req tec.) in queue and send it when the call stack become empty
// Event loop => monitor to both call stack and callback function for execution as js is single threaded

// goes on call stack
// console.log("start");

// //goes on callback queue
// setTimeout(() => {
//   console.log("interval");
// }, 100);

// // goes on call stack
// console.log("end");

//output: start end interval

// =====================================================================================================================

// ##2>What is a closure in JavaScript, and why is it important?
// A closure is created when a function is defined within another function (the parent function),
// and this inner function retains access to the variables and scope of its parent function,
// even after the parent function has finished executing.

//It is the concept of creating HOC in react

// const outer = () => {
//   const outerVariable = "outer";

//   console.log("hello");

//   return (inner = () => {
//     console.log(outerVariable); // Accessing outerVariable from the outer function
//   });
// };

// const outerfun = outer();
// const innerFun = outerfun();

//it is important...\\

// =====================================================================================================================

//### 3>Describe the differences between var, let, and const in variable declaration.
// var, let and const are initiallization output are depend on hosting, scope and initilizations
// Here's how these variables behave in terms of hoisting, scope, and initialization:

//===hosting====
// console.log(a); //output: undefined
// var a;

// console.log(a); //output: ReferenceError: Cannot access 'a' before initialization
// let a;

// console.log(a);  //output: SyntaxError: Missing initializer in const declaration
// const a;

//==============assign and redeclear==============
//can redeclear and reassign
// var x = 20;
// var x = 70;
// console.log(x);  //output: 70

// can reassign but can not redeclear
// let x = 30;
// let x = 40;
// output: SyntaxError: Identifier 'x' has already been declared

//can not reassign and redeclear
// const x = 30;
// x = 40; //or
// const x = 40;

//=====================scope=======

{
  var x = 20;
  let y = 20;
  const z = 20;
}
console.log(x); // 20
// console.log(y); //output:  ReferenceError: y is not defined
// console.log(z); //output:  ReferenceError: z is not defined

// and functional, global and lexical, module scope etc...

// =====================================================================================================================

// ### 4> How does hoisting work in JavaScript?
