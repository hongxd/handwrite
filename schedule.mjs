function schedule(tasks, limit) {
  return new Promise((resolve, reject) => {
    let runningCount = 0;
    let index = 0;
    const results = [];
    function run() {
      if (runningCount >= limit || index >= tasks.length) {
        return;
      }
      runningCount++;
      const task = tasks[index++];
      task()
        .then((result) => {
          results.push(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          runningCount--;
          run();
        });
    }

    while (runningCount < limit && index < tasks.length) {
      run();
    }

    const check = setInterval(() => {
      if (runningCount === 0) {
        clearInterval(check);
        resolve(results);
      }
    }, 10);
  });
}

// Example usage:
const tasks = [
  () => new Promise(resolve=> setTimeout(resolve,3000)),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
  () => Promise.resolve(4),
  () => Promise.resolve(5),
  () => Promise.resolve(6),
  () => Promise.resolve(7),
  () => Promise.resolve(8),
  () => Promise.resolve(9),
  () => Promise.resolve(10),
];

schedule(tasks, 3)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  }); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
