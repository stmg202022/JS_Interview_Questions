// function A() {
//   this.value = 2;
// }

// var B = function () {};

// var b = new B();
// console.log(b.value === undefined); //true

// console.log(b instanceof A); //false
// console.log(b instanceof B); //true

// =============================================================

// n this approach, you are defining the hello method inside the constructor function.
//  This means that every time you create a new User object, a new function object is created for the hello method.
//  This can be inefficient, especially if you create many User objects because each object will have its own copy of the hello function.
//  It consumes more memory and is less memory-efficient.

// function Student(name) {
//   this.name = name;
//   this.hello = function () {
//     console.log("hello");
//   };
// }

// const std = new Student();
// std.hello();

//and
// In this approach, you define the hello method on the prototype of the User constructor
//  function. This means that the hello method is shared among all instances of User objects.
//  There is only one copy of the hello function in memory, no matter how many User objects you create.
// function Student(name) {
//   this.name = name;
// }
// Student.prototype.hello = function () {
//   console.log("hello");
// };

// const std = new Student();
// std.hello();

// ===================================================================================

// const Logger = function (logIn) {
//   //
//   _logFn = logIn; //console.log

//   this.log = function (message) {
//     _logFn(new Date() + ": " + message);
//   };
//   //
// };

// //instance
// const loggerInstance = new Logger(console.log);
// loggerInstance.log("hello");
// loggerInstance.log("hi");

// ==========================================================================================

function User(name) {
  this.name = name;
}

var u1 = new User("samson");
// console.log(u1);
// console.log(u1 instanceof User);

// var u2 = User("samson");
// console.log(u2);  //output: undefined
