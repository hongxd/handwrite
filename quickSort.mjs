/**
 * 单路快排
 * @param {Array} arr
 */
function quickSort1(arr) {
  const helper = (left, right) => {
    if (left >= right) return;
    const pivotIndex = partition(arr, left, right);
    helper(left, pivotIndex-1);
    helper(pivotIndex+1, right);
  }
  helper(0, arr.length - 1);
}
const partition = (arr, left, right) => {
  // 随机选一个数，与left交换，变成pivot
  const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
  swap(left, randomIndex,arr);
  const pivot = arr[left];
  let j = left + 1;
  for (let i = j; i <= right; i++) {
    if (arr[i] <= pivot) {
      swap(i, j, arr);
      j++;
    }
  }
  swap(left, j - 1, arr); // 让pivot到达它应该在的位置
  return j - 1;
};
const swap = (index1, index2, arr) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
const arr = [1,8888,9999, 5, 2, 3, 4, 9]
console.log(arr)
quickSort1(arr)
console.log(arr)
