function mergeSort(arr, result, start, end) {
  if (start >= end) return;
  const len = end - start;
  const mid = Math.trunc(len / 2) + start;
  let start1 = start,
    end1 = mid;
  let start2 = mid + 1,
    end2 = end;
  mergeSort(arr, result, start1, end1);
  mergeSort(arr, result, start2, end2);
  let k = start;
  while (start1 <= end1 && start2 <= end2)
    result[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
  while (start1 <= end1) result[k++] = arr[start1++];
  while (start2 <= end2) result[k++] = arr[start2++];
  for (k = start; k <= end; k++) arr[k] = result[k];
}

function merge_sort(arr) {
  const len = arr.length;
  const result = new Array(len).fill(0);
  mergeSort(arr, result, 0, len - 1);
}

// function mergeSort(arr) {
//   const len = arr.length;
//   let result = new Array(len).fill(0);
//   let block, start;

//   // 原版代码的迭代次数少了一次，没有考虑到奇数列数组的情况
//   for (block = 1; block < len * 2; block *= 2) {
//     for (start = 0; start < len; start += 2 * block) {
//       let low = start;
//       let mid = (start + block) < len ? (start + block) : len;
//       let high = (start + 2 * block) < len ? (start + 2 * block) : len;
//       //两个块的起始下标及结束下标
//       let start1 = low, end1 = mid;
//       let start2 = mid, end2 = high;
//       //开始对两个block进行归并排序
//       while (start1 < end1 && start2 < end2) {
//         result[low++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
//       }
//       while (start1 < end1) {
//         result[low++] = arr[start1++];
//       }
//       while (start2 < end2) {
//         result[low++] = arr[start2++];
//       }
//     }
//     const temp = arr;
//     arr = result;
//     result = temp;
//   }
//   result = arr;
// }
const arr = [1, 8888, 9999, 5, 2, 3, 4, 9];
merge_sort(arr);
console.log(arr);
