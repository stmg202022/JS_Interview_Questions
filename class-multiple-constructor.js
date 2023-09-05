// // if we have two or more constructor in single class this error occurs
// // output: SyntaxError: A class may only have one constructor

// class Rectangle {
//   constructor(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//   }

//   //another constructor
//   //   constructor(){
//   //     this.length = this.length
//   //   }

//   //getter
//   get area() {
//     return this.calcArea();
//   }

//   //method
//   calcArea() {
//     return this.length * this.breadth;
//   }
// }

// //create instances of class
// const square = new Rectangle(4, 4);
// console.log(square); // Rectangle { length: 4, breadth: 4 }
// console.log(square.area); // 16

// ==========================================================================================================

// class MyClass {
//   constructor(name) {
//     // Constructor
//     this.name = name;
//   }

//   regularMethod() {
//     // Regular method with 'this' binding
//     console.log("Regular method called:", this.name);
//   }

//   arrowMethod = () => {
//     // Arrow method with inherited 'this' from the class instance
//     console.log("Arrow method called:", this.name);
//   };
// }

// const instance = new MyClass("samson");

// instance.regularMethod(); // 'this' refers to the instance
// instance.arrowMethod(); // 'this' also refers to the instance

// ======================================================================================================
