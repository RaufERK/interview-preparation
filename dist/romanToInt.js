"use strict";
function romanToInt(s) {
    // const M = 1000
    // const C = 100
    // const X = 10
    // const L = 50
    // const V = 5
    // const I = 1
    return s.split('').reduce((acc, el) => {
        switch (el) {
            case 'I':
                return acc + 1;
                break;
            case 'V':
                return acc + 5;
                break;
            case 'L':
                return acc + 50;
                break;
            case 'X':
                return acc + 10;
                break;
            case 'C':
                return acc + 100;
                break;
            case 'D':
                return acc + 500;
                break;
            case 'M':
                return acc + 1000;
                break;
            default:
                return acc;
                break;
        }
    }, 0);
}
console.log(romanToInt('CM'));
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
