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

const a = [1, [1, 2, [1, 2, 3,[111,222,[1111]]]]].Flat(4)
console.log(a)
