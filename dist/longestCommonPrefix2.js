"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('====longestCommonPrefix===>');
function longestCommonPrefix(strs) {
    let prefix = '';
    const array = strs[0];
    const restWords = strs.slice(1);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (restWords.every((word) => word[i] === element)) {
            prefix += element;
        }
        else
            return prefix;
    }
    return prefix;
}
const strs1 = ['flower', 'flow', 'flight'];
const strs2 = ['dog', 'racecar', 'car'];
const strs3 = ['cir', 'car'];
console.log('==>', longestCommonPrefix(strs1));
console.log('==>', longestCommonPrefix(strs2));
console.log('==>', longestCommonPrefix(strs3));
