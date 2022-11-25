/**
 * 
 * @param {function} cb 回调函数
 * @param {number} initialValue 初始值
 * @return {number} 计算值
 */
Array.prototype.reduce = function (cb, initialValue = 0) {
  let val = initialValue;
  for (let i = 0; i < this.length; i++) {
    val = cb(val,this[i],i,this)
  }
  return val;
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const b = a.reduce((prev, curr, index, arr) => {
  return prev + curr;
},10)
console.log(b)
