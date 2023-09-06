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

// {
//   var x = 20;
//   let y = 20;
//   const z = 20;
// }
// console.log(x); // 20
// console.log(y); //output:  ReferenceError: y is not defined
// console.log(z); //output:  ReferenceError: z is not defined

// and functional, global and lexical, module scope etc...

// =====================================================================================================================

// ### 4> How does hoisting work in JavaScript?
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

// However, there are two primary aspects of hoisting:

//  variable hosting
// console.log(x); //output: undefined
// var x;
// x = 10;
// console.log(x); // output: 10

//let and const Declerations
// console.log(x); //output: get error
// let x = 20;
// console.log(x); //output: 20

// and

//functional hosting
// sayHello(); //output: Hello
// function sayHello() {
//   console.log("Hello");
// }
//

//arrow function is similar to the let and const

// =====================================================================================================================
// ##5> Explain the concept of lexical scoping in JavaScript.
// Lexical scoping is a fundamental concept in JavaScript and many other programming languages.
// It defines how variable scope is determined based on the physical structure of the code,
// specifically, how and where functions are declared within the code. In lexical scoping,
// the scope of a variable is determined by its location in the source code, at the time
// the code is written, not when it's executed.

// const outerFunction = () => {
//   let outerUser = {
//     name: "samson",
//     age: 24,
//     isAdmin: false,
//   };

//   //this inner function can access its own inner variable and outer variable
//   let innerFunction = () => {
//     let innerUser = {
//       name: "sagar",
//     };
//     console.log(`My name is ${innerUser.name} from inner`);
//     console.log(`My name is ${outerUser.name} from outer`);
//   };

//   innerFunction();
//   //outer function can access its own variable
//   console.log(`My name is ${outerUser.name} from outer`);
// };
// outerFunction();

// output:
// My name is sagar from inner
// My name is samson from outer
// My name is samson from outer

// =====================================================================================================================
//##6 What are the different data types in JavaScript?

//Premetive dataType/(immutable value): Number, String, Boolean, Undefined, Null, Symbol, BigInt,
//Non-Premetive/(mutable value) :  Object, Array, Function, Date, RegExp, Map(ES6), Set(ES6),

// let map = new Map();
// console.log(map);
// //output: Map(0) {}

// map.set("name", "samson");
// console.log(map);
// //output: Map(1) { 'name' => 'samson' }

// map.set("age", 23);
// console.log(map);
// // output: Map(2) { 'name' => 'samson', 'age' => 23 }

// //
// console.log(map.get("name")); //output: samson
// console.log(map.delete("name"));
// console.log(map.size); //output: 1

// //
// const x = new Set([2, 4, 5]);
// console.log(x);

// =====================================================================================================================
//## 7>What is the purpose of the this keyword in JavaScript?
// The this keyword in JavaScript is a special keyword that is used to refer to the current execution context
// or the current object, depending on how and where it is used.
// Its purpose can vary depending on the context, and it plays a crucial role in object-oriented programming and event handling.
//see on this.js file
<<<<<<< HEAD

// =====================================================================================================================
//### 8>How do you deep clone an object in JavaScript?
//A deep clone in JavaScript is a process of creating a new object that is an exact copy of another object, including all nested objects and their properties

//Using JSON.stringify and JSON.parse:   // create const originalArray too
const originalObj = {
  name: "sagar",
  age: 24,
  address: {
    street: "123 Main St",
    city: "ktm",
  },
};

function deepClone(org) {
  return JSON.parse(JSON.stringify(org));
}

// const clone = deepClone(originalObj);
// clone.address.city = "Lalitpur";
// console.log(clone);
// console.log(originalObj); //original state is not changing

// const copy = originalObj;
// copy.address.city = "dhading";
// console.log(copy);
// console.log(originalObj); //original state is changing
// console.log("is original state is changing?:", copy === original);

// =====================================================================================================================
//## 9> Explain the differences between null and undefined in JavaScript.

let x;
console.log(x); // output: undefined
console.log(typeof x); //output: undefined

x = null;
console.log(x); //output: null
console.log(typeof x); //output: object
=======
>>>>>>> 5f4bcb4 (what is the purpose of 	his keyword in js ?)
