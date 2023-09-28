function repeat(cb, time, wait) {
  return function (arg) {
    let promise = Promise.resolve();
    for (let i = 0; i < time; i++) {
      promise = promise.then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            cb(arg);
            resolve();
          }, wait);
        });
      });
    }
  };
}

const rep = repeat(console.log,4,3000);
rep("6666")
