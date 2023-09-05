// =================================================1> this key=================================

// const myFun = {
//   name: "samson",
//   regularfun: function () {
//     console.log("regular function", this.name);
//   },

//   arrowFun: () => {
//     console.log("Arrow function", this.name);
//   },
// };

// myFun.regularfun(); //output: regular function samson
// myFun.arrowFun(); //output: Arrow function undefined

//******************** */
// const student = {
//   name: "sagar",
//   regularfun: function () {
//     console.log(this.name);
//   },

//   arrowFun: () => {
//     console.log(this.name);
//   },
// };

// student.regularfun(); //output: sagar
// student.arrowFun(); //output: undefined

// =================================================2> arguments=================================

// function regularFun() {
//   console.log("This own arguments:", arguments);
// }

// regularFun({ name: "samson" }, 23, [false]);
//output: This own arguments: [Arguments] { '0': { name: 'samson' }, '1': 23, '2': [ false ] }

// const arrowFun = (...args) => {
//   console.log("Arrow function argument:", args);
// };

// arrowFun({ name: "samson", age: 23 });
// //output: Arrow function argument: [ { name: 'samson', age: 23 } ]

// const arrowFun = (args) => {
//   console.log("Arrow function argument:", args);
// };

// arrowFun({ name: "samson", age: 23 });
//output: Arrow function argument: { name: 'samson', age: 23 }

// =================================================3> Constructor=================================
//arrow function do not have its own constructor. so instance of arrow function can not be create

// const arrowConstructor = () => {
//   this.name = "samson";
// };

// //instance of arrow
// const myName = new arrowConstructor();
// console.log(myName.name); //output: TypeError: arrowConstructor is not a constructor

// function regularFun() {
//   this.name = "sagar";
// }

// //instance of regular function
// const myName = new regularFun();
// console.log(myName.name);

// =================================================4> Method syntax=================================

//IN OBJECT
// const arrowObject = {
//   name: "samson",
//   arrowMethod: () => {
//     console.log("My name is :", this.name); // `this` refers to the global context
//   },
// };
// arrowObject.arrowMethod(); // output: My name is undefined

// const regularObject = {
//   name: "sagar",
//   regularMethod: function () {
//     console.log(`My name is: ${this.name}`); //  `this` refers to regularOject
//   },
// };
// regularObject.regularMethod(); //

//IN CLASS: `this` key is works as a same
// class MethodExample {
//   constructor() {
//     this.name = "Class Method Example";
//   }

//   arrowMethod = () => {
//     console.log("Arrow Method - this.name:", this.name); // `this` refers to the class instance
//   };

//   regularMethod() {
//     console.log("Regular Method - this.name:", this.name); // `this` refers to the class instance
//   }
// }

// const instance = new MethodExample();
// instance.arrowMethod(); // Output: Arrow Method - this.name: Class Method Example
// instance.regularMethod(); // Output: Regular Method - this.name: Class Method Example

// =================================================4> Return Behaviour=================================

//    SINGLE_RETURN_EXPRESSION: same PROPERTY but have to write return in reg function for single expression

// const arrowFun = (x) => x * 2;
// console.log(arrowFun(8));

// function regularFun(x) {
//   return x * 2;
// }
// console.log(regularFun(8));

//MULTIPLE_RETURN_EXPRESSION: same return explicitly
// const arrowFun = (x) => {
//   if (x > 0) {
//     return x * 2;
//   } else {
//     return 0;
//   }
// };
// console.log(arrowFun(4));

// //
// function regularfun(y) {
//   if (y > 0) {
//     return y * 2;
//   } else {
//     return 0;
//   }
// }
// console.log(regularfun(4));

// =================================================4> arguments and super Behaviour=================================

// const arrowFunc = () => {
//   console.log(arguments[0]);
// };
// arrowFunc(1); // non-strict mode environment
//outputnat console: {} //VM281:2 Uncaught ReferenceError: arguments is not defined

// function regularfun() {
//   console.log(arguments[3]); //indexing
// }
// regularfun(3, 2, 4, 4);
// output: 4 as this regular function contain its own arguments

//

// what about super ? guess...

// ==================================================================prototype=============================================================

// function RegularFun() {
//   this.prop = "Regular functions property";
// }

// RegularFun.prototype.methodOfReg = function () {
//   console.log(this.prop);
// };

// //instance
// const instanceOfReg = new RegularFun();
// instanceOfReg.methodOfReg();

// //but: arrow function do not have prototype

// const ArrowFun = () => {
//   this.prop = "Arrow function property";
// };

// ArrowFun.prototype.methodOfArrow = function () {
//   console.log(this.prop);
// };
// output: SyntaxError: Unexpected end of input

//also can not create instance of arrow function

// ==================================================================Function Name=============================================================

// function regularFun() {
//   console.log("Regular function");
// }

// const arrowfun = () => {
//   console.log("Arrow Function");
// };

// console.log(regularFun.name); //output: regularFun
// console.log(arrowfun.name); //output: arrowFun (or (or an empty string in some environments))

// Arrow functions typically do not have a named name property,
//  which means their name property might be an empty string or
//  a generic name like "anonymous".

// ==================================================================new.target=============================================================

// function regularFun() {
//   if (new.target) {
//     console.log("new target is:", new.target);
//   } else {
//     console.log("No new.target");
//   }
// }

// //instance
// const instanceOfRegularFun = new regularFun(); //output: new target is: [Function: regularFun]
// const arrowInstance = regularFun(); //output: NO new.target

// const arrowFun = () => {};
//arrrow function can not create instance so new.target does not contain

// ==========================================================================call, bind, apply=================================

//bind
// const arrowFun = () => {
//   console.log(this.name);  //global scope
// };

// const obj = { name: "samson" };

// const bindArrow = arrowFun.bind(obj);
// bindArrow(); //output: undefined

// function regularFun() {
//   console.log(this.name);
// }

// const bindRegularFun = regularFun.bind(obj);
// bindRegularFun(); //output: samson

// ******************************************************
// Regular function
// function regularFunction() {
//   console.log("Regular function this:", this);
// }

// // Arrow function
// const arrowFunction = () => {
//   console.log("Arrow function this:", this);
// };

// const obj = {
//     prop: "I am an object property",
// };

// Using call() with regular function
// regularFunction.call(obj); // Regular function this: { prop: 'I am an object property' }

// Using call() with arrow function
// arrowFunction.call(obj); // Arrow function this: {}

// Using apply() with regular function
// regularFunction.apply(obj); // Regular function this: { prop: 'I am an object property' }

// Using apply() with arrow function
// arrowFunction.apply(obj); // Arrow function this: {}

// ===========================================================================================================

//we can called before initialization of regular function
// console.log(inner); //output: [Function: inner]
// function inner() {
//   console.log("inner");
// }

//but arrow function can not call

// console.log(inner); //output: ReferenceError: Cannot access 'inner' before initialization
// const inner = () => {
//   console.log("inner");
// };
// console.log(inner); //output: [Function: inner]

//***************************************************** */
// (function () {
//   f();
//   f = function () {
//     console.log(1);
//   };
// })();
// function f() {
//   console.log(2);
// }
// f();
// // output: 2 1

//***************************************************** */

// (function () {
//   logMe();
//   var logMe = function () {
//     console.log("Jesus, George, it was a wonder I was even born.");
//   };
//   logMe();

//   function logMe() {
//     console.log("Great Scott!");
//   }
//   logMe();
// })();

// ====================================================================
// var text = "outside";
// function logIt() {
//   console.log(text);
//   var text = "inside"; // if comment out this // output: "outside"
// }
// logIt();
// output: undefined

// (function () {
//   var a = "initial";
//   if (a) {
//     function f() {
//       console.log("1");
//     }
//   } else {
//     function f() {
//       console.log("2");
//     }
//   }
//   f();
// })();
