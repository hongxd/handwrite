// 实现一个CodingMan，可以按照以下方式调用:
// CodingMan(“Hank”)输出:
// Hi! This is Hank!
// CodingMan(“Hank”).sleep(10).eat(“dinner”)
// 输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
// 输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推
function CodingMan(val) {
  const queue = [];
  queue.push(() => {
    console.log("Hi This is " + val);
  });
  const codingMan = {
    sleep(time) {
      const fn = () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, time)
        );
      queue.push(fn);
      return this;
    },
    eat(arg) {
      const fn = () => console.log("Eat " + arg);
      queue.push(fn);
      return this;
    },
    sleepFirst(time) {
      const fn = () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, time)
        );
      queue.unshift(fn);
      return this;
    },
  };

  setTimeout(() => {
    let promise = Promise.resolve();
    for (let i = 0; i < queue.length; i++) {
      promise = promise.then(queue[i]);
    }
  });
  return codingMan;
}
CodingMan("Hank")
  .sleep(1000)
  .eat("shit")
  .sleepFirst(1000)
  .sleep(1000)
  .eat("dhx");
// CodingMan("sss").eat("shit").sleep(3000).eat("shot").sleepFirst(1000);
