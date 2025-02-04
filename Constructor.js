// Constructor

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;

  this.displayInfo = function () {
    return `${this.name} is  ${this.age} years old and enrolled in ${this.course}`;
  };
}

const student1 = new Student("John", 20, "Computer Science");
const student2 = new Student("Jane", 21, "Mathematics");

console.log(student1.displayInfo());
console.log(student2.displayInfo());

// const name = new String("John");
// const age = new Number(20);
// const course = new String("Computer Science");

// new

// this
