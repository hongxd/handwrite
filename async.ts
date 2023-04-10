// 传入一个生成器函数
function asyncToGenerator(generatorFunc) {
  return function () {
      // 生成器函数执行后返回生成器
      const gen = generatorFunc.apply(this, arguments)
      return new Promise((resolve, reject) => {
        function step(key, arg = {}) {
          let generatorResult
          try {
            generatorResult = gen[key](arg) // 调用next或者throw方法
          } catch (error) {
            return reject(error)
          }
          const { value, done } = generatorResult
          if (done) {
            return resolve(value)
          } else {
            return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
          }
        }
        step("next")
      })
    }
}

function getData(num) {
  return num
}
function* gen() {
  const num1 = yield getData(1)
  console.log(num1) // 2
  const num2 = yield getData(2)
  console.log(num2) // 4
  const num3 = yield getData(4)
  console.log(num3) // 8
  return 10
}

const asyncRes = asyncToGenerator(gen)()
console.log(asyncRes); // Promise {<pending>}
asyncRes.then(res => {
  console.log(res); // 3s 后返回 10
})
