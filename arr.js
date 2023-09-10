/**
 * 数组并集
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function bing(arr1, arr2) {
  const set = new Set([...arr1, ...arr2]);
  return Array.from(set);
}
/**
 * 数组交集
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function jiao(arr1, arr2) { 
  const set = new Set(arr1);
  const len = arr2.length;
  const ans = [];
  for (let i = 0; i < len; i++) {
    if (set.has(arr2[i])) {
      ans.push(arr2[i]);
    }
  }
  return ans;
}

/**
 * 数组的差集(arr1-arr2)
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function cha(arr1, arr2) {
  const set = new Set(arr1);
  for (let i = 0; i < arr2.length;i++) {
    if (set.has(arr2[i])) {
      set.delete(arr2[i]);
    }
  }
  return Array.from(set);
}

console.log(cha([1,2,3,4],[2,4,8,9,10,11,12,13,14,15]))
