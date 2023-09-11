/**
 * 发红包算法，浮点数运算存在问题，要解决的话需要转整型
 * @param {number} money
 * @param {number} num
 */
function luckyMoney(money, num) {
  if (money < 0.01 * num) return;
  if (Math.floor(money * 100) / 100 !== money) return;
  const ret = new Array(num).fill(0.01);
  money -= 0.01 * num;
  for (let i = 0; i < num - 1; i++) {
    const random = Math.floor(Math.random() * money * 100) / 100; //可以为0
    money -= random;
    ret[i] += random;
  }
  ret[num - 1] += money;
  return ret;
}
console.log(luckyMoney(100,2))
