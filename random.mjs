/**
 * 洗牌算法，数组打乱
 * @param {Array} arr 被打乱数组
 */
function random(arr) {
  const len = arr.length;
  for (let i = len - 1; i > 0; i--) {
    const rd = Math.floor(Math.random() * (i - 1));
    const temp = arr[i];
    arr[i] = arr[rd];
    arr[rd] = temp;
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)
random(arr)
console.log(arr)
