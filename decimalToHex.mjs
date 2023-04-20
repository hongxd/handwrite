/**
 * 10进制转16进制
 * @param {number} num 
 * @returns 
 */
function t(num) {
  const map = new Map([[10, "A"], [11, "B"], [12, "C"], [13, "D"], [14, "E"], [15, "F"]]);
  const ans = [];
  while (num !== 0) {
    const t = num % 16;
    ans.push(t > 9 ? map.get(t) : t);
    num = Math.trunc(num / 16);
  }
  return ans.reverse().join("");
}
console.log(t(1))
console.log(t(10))
console.log(t(1110))
