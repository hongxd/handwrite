/**
 * 插入排序
 * @param {any[]} arr 数组 
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 前面的有序，后面的无序
    const temp = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] < temp) {
        arr[j] = arr[j + 1];
      } else {
        break;
      }
    }
    arr[j+1] = temp;
  }
  return arr;
}
console.log(insertionSort([5,4,3,2,1]))
