/**
 * 数组分块
 * @param {Array} chunks
 * @param {number} target
 * @returns {Array} result
 */
function chunk(chunks, target) {
  const res = [];
  const len = chunks.length;
  let i = 0;
  let left = 0;
  while (i < len) {
    if (i !== 0 && i % target === 0) {
      res.push(chunks.slice(left, i));
      left += target;
    }
    i++;
  }
  res.push(chunks.slice(left, i));
  return res;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
