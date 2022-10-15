"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
console.log('==== START =====>');
function addTwoNumbers(l1, l2) {
    let result = null;
    let delta = 0;
    while (l1 || l2 || delta) {
        let value1 = 0;
        let value2 = 0;
        if (l1) {
            value1 = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            value2 = l2.val;
            l2 = l2.next;
        }
        const val = (value1 + value2 + delta) % 10;
        delta = value1 + value2 + delta >= 10 ? 1 : 0;
        result = { val, next: result };
    }
    return result;
}
const list1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 9,
            next: null,
        },
    },
};
const list2 = {
    val: 5,
    next: { val: 6, next: { val: 4, next: { val: 9, next: null } } },
};
let res = addTwoNumbers(list1, list2);
while (res) {
    console.log('==>', res.val);
    res = res.next;
}
