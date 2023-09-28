function smallNMaxNum(arr, n) {
  if (n <= 0) return 0;
  const used = new Array(arr.length).fill(false);
  return helper(arr, n, used);
}
function helper(arr, n, used, path = [], max = Number.MIN_SAFE_INTEGER) {
  const arrStr = arr.join("")
  const len = arrStr.length;
  const pLen = path.length;
  for (let i = 0; i < len && max < n; i++) {
    if (pLen > 0 && path[0] === "0") return Number.MIN_SAFE_INTEGER;
    if (len === pLen) return max;
    if (!used[i]) {
      path.push(arr[i]);
      used[i] = true;
      const num = Number(path.join(""));
      const res = helper(arr, n, used, path, max);
      max = Math.max(num, res < n ? res : max);
      path.pop();
      used[i] = false;
    }
  }
  return max;
}
console.log(smallNMaxNum([1, 2, 3, 6,0], 3210));
