console.log('====== START ======>>>>')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(value = 0, next = null) {
  this.val = value
  this.next = next
}

var mergeTwoLists = function (list1, list2) {
  let current = new ListNode()
  let first = current
  let current1 = list1
  let current2 = list2

  while (current1 || current2) {
    console.log(current1, current2)
    if (!current2 || current1?.val <= current2?.val) {
      current.next = current1
      current = current1
      current1 = current1?.next
    } else {
      current.next = current2
      current = current2
      current2 = current2?.next
    }
  }
  return first.next
}

// let result = mergeTwoLists([1, 2, 4], [1, 3, 4])
// let result = mergeTwoLists(
//   { val: 1, next: { val: 2, next: { val: 4, next: null } } },
//   { val: 1, next: { val: 3, next: { val: 4, next: null } } }
// )
let result = mergeTwoLists({ val: 1, next: null })

console.log('res==>')
while (result) {
  console.log(result.val)
  result = result.next
}
