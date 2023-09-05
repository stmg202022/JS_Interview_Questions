// if we have two or more constructor in single class this error occurs
// output: SyntaxError: A class may only have one constructor

class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  //another constructor
  //   constructor(){
  //     this.length = this.length
  //   }

  //getter
  get area() {
    return this.calcArea();
  }

  //method
  calcArea() {
    return this.length * this.breadth;
  }
}

//create instances of class
const square = new Rectangle(4, 4);
console.log(square); // Rectangle { length: 4, breadth: 4 }
console.log(square.area); // 16
