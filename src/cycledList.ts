// cyclic task
// введем понятие- если в связном списке есть элемент, ссылающийся на NULL, цикла нет.
// Если находится элемент, ссылающийся на какой-либо из предыдущих или на самого себя, то цикл есть
// архитектор отдал интерфейс:
// interface LLI {LLI next();}
// где next() возвращает следующий элемент
// задача: написать функцию bool hasCycle(LLI lli)
// которая принимает элемент связного списка и возвращает true если цикл в данном списке есть, и false если цикла нет

interface LLI {
  value: number
  next: LLI | null
}

const elMaker = (value: number, next: LLI | null): LLI => ({
  value,
  next,
})

const el3: LLI = elMaker(3, null)
const el2: LLI = elMaker(2, el3)
const el1: LLI = elMaker(1, el2)

const hasCycle = (element: LLI) => {
  let current: LLI | null = element.next
  const first = element
  while (current) {
    if (current === first) return true
    current = current.next
  }
  return false
}

// const printCycle = (element: LLI) => {
//   let current: LLI | null = element
//   while (current) {
//     console.log(current.value)
//     current = current.next
//   }
// }

console.log(hasCycle(el1))
el3.next = el1
console.log(hasCycle(el1))
