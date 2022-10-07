"use strict";
const bigObject = {
    value1: '111',
    value11: '12121',
    value2: {
        lvl1: 'sl1',
        lvl2: {
            lvl3: 'sl3',
            lvl4: {
                lvl5: 'sl5',
            },
        },
    },
};
const myFoo = (path = '', paramObj) => {
    let result = {};
    for (let index in paramObj) {
        const value = paramObj[index];
        const newIndex = path ? `${path}.${index}` : index;
        if (typeof value === 'object') {
            console.log('object');
            console.log({ path, index, value });
            const fooRes = myFoo(newIndex, value);
            console.log(fooRes);
            result = Object.assign(Object.assign({}, result), fooRes);
        }
        else {
            result = Object.assign(Object.assign({}, result), { [newIndex]: value });
        }
    }
    return result;
};
console.log('====>');
console.log('FINAL:', myFoo('', bigObject));
