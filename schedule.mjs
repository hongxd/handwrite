/**
 * 实现限制请求并发数
 * @param {Promise[]} tasks 总任务数
 * @param {number} limit 限制并发数
 * @returns 
 */
/* function schedule(tasks, limit) {
  return new Promise((resolve, reject) => {
    const len = tasks.length;
    let current = 0;
    let currentIndex = 0;
    const results = [];
    const run = () => {
      while (current <= limit && currentIndex < len) {
        current++;
        tasks[currentIndex]()
          .then((val) => {
            results.push(val);
            console.log(val)
          })
          .catch(reject)
          .finally(() => {
            current--;
            run();
          });
        currentIndex++;
      }
      if(currentIndex===len) resolve(results);
    };
    run();
  });
} */

// Example usage:
const tasks = [
  () => new Promise((resolve)=>setTimeout(()=> resolve(1),9000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(2),1000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(3),1000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(4),2000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(5),2000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(6),3000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(7),3000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(8),4000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(9),4000)),
  () => new Promise((resolve)=>setTimeout(()=> resolve(10),4000)),
];0

schedule(tasks, 2)
  .then((results) => {
    // console.log(results);
  })
  .catch((error) => {
    console.error(error);
  }); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
