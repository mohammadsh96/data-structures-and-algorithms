'use strict';
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return Merge(mergeSort(left), mergeSort(right));
  }
}

function Merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
  return arr;
}
let arr = [8, 4, 20, 45, 1 ,29]
console.log(mergeSort(arr));
module.exports.mergeSort = mergeSort;
