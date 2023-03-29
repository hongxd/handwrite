Array.prototype.filter = function (cb) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const b = a.filter((item, index, arr) => {
  return item > 0;
})
console.log(b)
