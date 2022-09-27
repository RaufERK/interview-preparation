"use strict";
function twoSum(nums, target) {
    const result = [];
    nums.forEach((el1, index1) => {
        nums.forEach((el2, index2) => {
            if (el1 + el2 === target && index1 !== index2 && !result.length) {
                result.push(index1, index2);
            }
        });
    });
    return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
