function fn(num) {
  return new Promise((resolve) => { 
    setTimeout(() => {
      console.log(num);
      resolve()
    }, 1000);
  })
}
function arrConsole(arr,f) {
  let promise = Promise.resolve();
  for (let i = 0; i < arr.length; i++) {
    promise = promise.then(async () => {
      await fn(arr[i]);
    });
  }
  return fn ? promise.then(f) : promise;
}

// 2.给出两个示例，实现 arrConsole 函数（每隔一秒打印一个数，最后再打印6）
// arrConsole([1, 2, 3, 4, 5], () => {
//   console.log(6)
// })

await arrConsole([1, 2, 3, 4, 5])
console.log(6)
