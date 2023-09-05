// Here we do not use arrow function bcz arrow functions do not have their this key
function User(name, age) {
  this.name = name;
  this.age = age;

  console.log(this.name, this.age);

  this.getInfo = function () {
    //outer functions
    console.log("outer", this.constructor.name, this.age);

    // inner functions
    return function () {
      console.log("inner:", this.name, this.age);
    };
  };
}

const user = new User("samson", 23); //instance
// let name = user.name;
let getInfo = user.getInfo(); //outer function
getInfo(); //inner function  //output: inner undefined  undefined  //due to not using arrow function  in it
