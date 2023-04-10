class Subject {
  observes;
  constructor() {
    this.observes = [];
  }
  observe(subject) {
    this.observes.push(subject);
  };
  remove(subject) {
    const index = this.observes.findIndex((item) => item === subject);
    if (index !== -1) this.observes.splice(index,1);
  }
  notify(data) {
    this.observes.forEach((sub) => sub.update(data));
  }
}
class Observer {
  update(data) {
    console.log(data)
  }
}
const observer = new Observer();
const subject = new Subject();
subject.observe(observer);
subject.notify(888)
