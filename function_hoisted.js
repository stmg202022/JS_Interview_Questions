//instance
var stdInfo = new Student({ name: "samson", age: 24, isAdmit: true });
console.log(stdInfo);

function Student({ name, age, isAdmit }) {
  this.name = name;
  this.age = age;
  this.isAdmit = isAdmit;
}
