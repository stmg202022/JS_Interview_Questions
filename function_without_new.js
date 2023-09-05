function Student(name, age, isAdmit) {
  this.name = name;
  this.age = age;
  this.isAdmit = isAdmit;
}

const std = Student("samson", 34, false);
console.log(std); //undefined
