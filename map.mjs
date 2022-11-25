Array.prototype.map = function (fn) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i],i,this));
  }
  return arr;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const b = a.map((item, index, arr) => {
  return item * 2;
})
console.log(b)
