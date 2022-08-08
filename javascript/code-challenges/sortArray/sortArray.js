"use strict";

//solution with build in method
function sortArray(arr) {
  arr.sort(comp);

  function comp(a, b) {
    return a - b;
  }

  return arr;
}

let arr = [8, 4, 20, 45, 1];
console.log(sortArray(arr));


module.exports =sortArray;


//solution without build in method

// function insertionSort(array) {

//   for (let i = 1; i < array.length; i++) {

//       let j = i - 1;
//       let temp = array[i];

//       while (j >= 0 && temp < array[j]) {

//           array[j + 1] = array[j];
//           j = j - 1;
//       }
//       array[j + 1] = temp;
//   }

//   return array;
// }

// module.exports = insertionSort;
