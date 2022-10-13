"use strict";
console.log('===== isValid =====>');
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
function isValid(s) {
    const alphabet = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    const stack = [];
    const array = s.split('');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const last = stack[stack.length - 1];
        console.log(element, last);
        if (element === last) {
            stack.pop();
        }
        else {
            stack.push(alphabet[element]);
        }
    }
    return stack.length === 0 ? true : false;
}
