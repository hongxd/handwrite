/**
 * 实现限制请求并发数
 * @param {(()=>Promise)[]} tasks 总任务数
 * @param {number} limit 限制并发数
 * @returns
 */
// 并发请求函数
const schedule = (tasks, limit) => {
  return new Promise((resolve) => {
    const len = tasks.length;
    if (len === 0) {
      resolve([]);
      return;
    }
    const results = [];
    let index = 0; // 下一个请求的下标
    let count = 0; // 当前请求完成的数量

    // 发送请求
    async function run() {
      if (index === len) return;
      const i = index++; // 保存序号
      try {
        const resp = await tasks[i]();
        // resp 加入到results
        results[i] = resp;
      } catch (err) {
        // err 加入到results
        results[i] = err;
      } finally {
        // 判断是否所有的请求都已完成
        if (++count === len) {
          console.log("完成了");
          resolve(results);
        }
        run();
      }
    }

    // limit和tasks.length取最小进行调用
    const times = Math.min(limit, len);
    for (let i = 0; i < times; i++) {
      run();
    }
  });
};

// Example usage:
const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(4), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(5), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve(6), 3000)),
  () => new Promise((resolve) => setTimeout(() => resolve(7), 3000)),
  () => new Promise((resolve) => setTimeout(() => resolve(8), 4000)),
  () => new Promise((resolve) => setTimeout(() => resolve(9), 4000)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 4000)),
];
0;

schedule(tasks, 2)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  }); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
