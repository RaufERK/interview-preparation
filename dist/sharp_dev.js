// cyclic task
// введем понятие- если в связном списке есть элемент, ссылающийся на NULL, цикла нет.
// Если находится элемент, ссылающийся на какой-либо из предыдущих или на самого себя, то цикл есть
// архитектор отдал интерфейс:
// interface LLI {LLI next();}
// где next() возвращает следующий элемент
// задача: написать функцию bool hasCycle(LLI lli)
// которая принимает элемент связного списка и возвращает true если цикл в данном списке есть, и false если цикла нет

const el1 = { name: 'el1', next: null }
const el2 = { name: 'el2', next: null }
const el3 = { name: 'el3', next: null }
const el4 = { name: 'el4', next: null }

el1.next = el3
el3.next = el4
el4.next = el1

const hasCycle = (element) => {
  if (!element.next) return false
  const members = []
  let next = element
  while (true) {
    console.log('name:', next.name, members)
    next = next.next
    if (next && next.name) {
      if (members.includes(next.name)) return true
      members.push(next.name)
    } else {
      return false
    }
  }
}

console.log(hasCycle(el1))
