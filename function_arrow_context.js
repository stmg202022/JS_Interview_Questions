//it is like closures and opps
function User(name, age) {
  this.name = name;
  this.age = age;

  console.log(this.name);

  this.getInfo = function () {
    // lexical environment function
    //outer finction context
    console.log("getName:", this.constructor.name, this.age); //this.constructor.age is not working why ? only name is working why in here ?

    return () => {
      //inner functions
      console.log(this.constructor.name);
      console.log(`i am`, this.name, " ", this.age);
    };
  };
}

let user = new User("samson", 23);

let info = user.getInfo();
info();
