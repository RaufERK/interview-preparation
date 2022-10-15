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

console.log('==== START =====>')

const printList = (list: ListNode) => {
  while (list) {
    console.log('==>', list.val)
    list = list.next
  }
}

type ListNode = {
  val: number
  next: ListNode | null
} | null

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const resArr: number[] = []
  let result: ListNode = null
  let delta = 0

  while (l1 || l2 || delta) {
    let value1 = 0
    let value2 = 0

    if (l1) {
      value1 = l1.val
      l1 = l1.next
    }
    if (l2) {
      value2 = l2.val
      l2 = l2.next
    }

    const val = (value1 + value2 + delta) % 10
    delta = value1 + value2 + delta >= 10 ? 1 : 0
    resArr.push(val)
  }
  resArr.reverse().forEach((val) => (result = { val, next: result }))

  return result
}

// const list1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 9,
//       next: null,
//     },
//   },
// }

// const list2 = {
//   val: 5,
//   next: { val: 6, next: { val: 4, next: { val: 9, next: null } } },
// }

const list1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
}

const list2 = {
  val: 5,
  next: { val: 6, next: { val: 4, next: null } },
}

printList(addTwoNumbers(list1, list2))

export = {}
