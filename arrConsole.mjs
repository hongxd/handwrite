function fn(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
}
function arrConsole(arr, func) {
  let promise = Promise.resolve();
  for (let i = 0; i < arr.length; i++) {
    promise = promise.then(async () => {
      await fn(arr[i]);
    });
  }
  // func不是必传的，传了就最后执行，没传就不需要执行
  return func ? promise.then(func) : promise;
}

// 2.给出两个示例，实现 arrConsole 函数（每隔一秒打印一个数，最后再打印6）
// arrConsole([1, 2, 3, 4, 5], () => {
//   console.log(6)
// })

await arrConsole([1, 2, 3, 4, 5]);
console.log(6);
