// `this` keyword is used in global context, eventHandling, function object,
// regular functions constructor, class constructor(ES6)

//Global context
// console.log(this === window); //In the browser // output: true

//
//Event handling
// const button = document.getElementById("mybutton");
// button.addEventListener("click", () => {
//   console.log("Button clicked by:", this.id);
// });

//
//function method(In object)
// this key is not exist in arrow function so we are using regular function here
// function getInfo() {
//   console.log(`My name is ${this.name}`);
// }
// const Parent = {
//   name: "samson",
//   age: 24,
//   getInfo,
// };
// Parent.getInfo(); //output: My name is samson

// //context Binding
// //
// const person = {
//   name: "sagar",
//   sayHello: function () {
//     console.log("Hello " + this.name);
//   },
// };
// person.sayHello();

//
//constructor functions:
// function Person(name) {
//   this.name = name;
// }

// const userName = new Person("sagar");
// console.log(userName.name); //output: sagar

//
//class constructor
// class Animal {
//   constructor(name, age) {
//     // Private properties (by convention, use underscore prefix)
//     this._name = name;
//     this._age = age;
//   }

//   // Getter methods for encapsulated properties
//   getName() {
//     return this._name;
//   }

//   getAge() {
//     return this._age;
//   }

//   // Setter methods for encapsulated properties
//   setName(name) {
//     if (typeof name === "string") {
//       this._name = name;
//     } else {
//       console.error("Name must be a string.");
//     }
//   }

//   setAge(age) {
//     if (typeof age === "number" && age >= 0) {
//       this._age = age;
//     } else {
//       console.error("Age must be a non-negative number.");
//     }
//   }

//   animalInfo() {
//     console.log(`${this._name} is ${this._age} yrs old.`);
//   }
// }

// const dog = new Animal("dog", 8);
// dog.animalInfo(); // Outputs: "dog is 8 yrs old."

// // Accessing properties using getter methods
// console.log(dog.getName()); // Outputs: "dog"
// console.log(dog.getAge()); // Outputs: 8

// // Modifying properties using setter methods
// dog.setName("puppy");
// dog.setAge(2);
// dog.animalInfo(); // Outputs: "puppy is 2 yrs old."
