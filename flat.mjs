/**
 * 
 * @param {number} depth 数组打平深度
 * @return {Array}
 */
Array.prototype.Flat = function (depth = 1) {
  if(depth <= 0) return this
  const arr = []
  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      arr.push(...this[i].Flat(depth - 1))
    }
    else 
      arr.push(this[i]);
  }
  return arr;
}

const a = [1, [1, 2, [1, 2, 3,[111,222,[1111]]]]].Flat(1)
console.log(a)
// 迭代版，不会那种带有depth的
Array.prototype.Flat_loop = function () {
  const arr = []
  const stack = this.slice()
  while (stack.length !== 0) {
    const val = stack.pop()
    if (val instanceof Array) {
      stack.push(...val)
    } else {
      arr.unshift(val)
    }
  }
  return arr;
}
const b = [1, [1, 2, [1, 2, 3,[111,222,[1111]]]]].Flat_loop()
console.log(b)
