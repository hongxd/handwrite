Function.prototype.myBind = function (thisArg, bindArgs = []) {
  thisArg = thisArg ? Object(thisArg) : window
  // this执向的是当前函数
  thisArg.fn = this
  return function (newArgs = []) {
    var args = [...bindArgs,...newArgs]
    return thisArg.fn(...args)
  }
}

const test = {
  test:"test"
}
function a() {
  console.log(this)
}
a.myBind(test)()
