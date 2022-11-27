Function.prototype.Call = function (thisArg, ...args) {
  const temp = thisArg ? Object(thisArg) : window;
  temp.fn = this
  return function (...newArgs) {
    const res = temp.fn(...args,...newArgs)
    delete temp.fn
    return res
  }
  
}

const test = {
  test:"test"
}
function a() {
  console.log(this)
}
a.Call(test)()
