function add() {
  // 将传入的不定参数转为数组对象
  let args = Array.prototype.slice.call(arguments);

  // 递归：内部函数里面进行自己调用自己
  // 当 add 函数不断调用时，把第 N+1 个括号的参数加入到第 N 个括号的参数里面
  let inner = function() {
    args.push(...arguments);
    return inner;
  }
  
  inner.toString = function() {
    // args 里的值不断累加
    return args.reduce(function(prev, cur) {
      return prev + cur;  
    });
  };

  return inner;
}

// 测试一下
let result = add(1)(2)(3)(4);
console.log(result.toString());
