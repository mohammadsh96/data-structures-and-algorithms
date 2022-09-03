'use strict';

function repeatedWord(string) {
    if (string === ' ') {
        return "Exception";
    }
    const arr = string.match(/\w+/g);
    console.log(arr)
    let wordArr = [];
    if (string.length){
        for (let i = 0; i < arr.length; i++) {

            const word = arr[i].toLowerCase();
            const checkIfRepeated = wordArr.includes(word);
            if (checkIfRepeated) {
                return word;
            } else {
                wordArr.push(word);
            }
        }

        return 'There is no repeated words';
    }

}
console.log(repeatedWord("hello there how are you there"))
module.exports = repeatedWord;
// function is_unique(str) {
//   var obj = {};
//   for (var z = 0; z < str.length; ++z) {
//     var ch = str[z];
//     if (obj[ch]) return false;
//     obj[ch] = true;
//   }
//   return true;
// }

// console.log(is_unique("abcdefgh")); // true
// console.log(is_unique("aa")); // false
