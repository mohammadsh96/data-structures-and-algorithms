'use strict';

const validateBrackets = (string) => {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of string) {

        if (!brackets[char]) {
            stack.push(char);
        } else if (stack.pop() !== brackets[char]) {
            return false
        }
    }
    return stack.length === 0;
};

module.exports = validateBrackets;
