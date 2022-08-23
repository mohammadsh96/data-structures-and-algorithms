'use strict';

function repeatedWord(string) {
    if (string === ' ') {
        return "Exception";
    }

    const arr = string.match(/\w+/g);
    // console.log(arr)
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

module.exports = repeatedWord;
