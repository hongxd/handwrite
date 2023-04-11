Promise.myAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const len = promiseArray.length;
    const res = new Array(len);
    let counter = 0;
    for (let i = 0; i < len; i++) {
      const p = Promise.resolve(promiseArray[i]); // 确保是一个promise
      p.then((val) => {
        counter++;
        res[i] = val;
        if (counter === len) resolve(res);
      }, reject);
    }
  });
};
const p = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5),
];
Promise.myAll(p)
  .then(
    (reason) => {
      console.log(reason);
    },
    (reason) => {
      console.log(reason);
    }
  )
  .catch((e) => console.log(e));
