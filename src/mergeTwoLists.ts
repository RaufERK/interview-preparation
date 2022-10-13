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

console.log('====== START ======>>>>')

interface LLI {
  val: number
  next: LLI | null
}

const newEl = (val: number = 0, next: LLI | null = null) => ({
  val,
  next,
})

var mergeTwoLists = function (list1: LLI, list2: LLI | null): LLI | null {
  let current: LLI = newEl()
  let first = current

  while (list1 || list2) {
    if (!list2 || list1.val <= list2?.val) {
      current.next = list1
      current = list1
      list1 = list1?.next!
    } else {
      current.next = list2
      current = list2
      list2 = list2?.next
    }
  }
  return first.next
}

const printList = (param: LLI | null): void => {
  console.log('=== printList ===>')
  while (param) {
    console.log(param.val)
    param = param.next
  }
}

// TASK => mergeTwoLists([1, 2, 4], [1, 3, 4])
let result = mergeTwoLists(
  { val: 1, next: { val: 2, next: { val: 4, next: null } } },
  { val: 1, next: { val: 3, next: { val: 4, next: null } } }
)
printList(result)

// TASK => mergeTwoLists([1], [1])

result = mergeTwoLists({ val: 1, next: null }, null)
printList(result)

export {}
