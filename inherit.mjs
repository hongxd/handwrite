function inherit(parent, child) {
  child.prototype = Object.create(parent.prototype);
  Object.defineProperty(child.prototype, "constructor", {
    configurable: true,
    value: child,
    writable: true
  })
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}
