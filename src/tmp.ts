console.log('====START====>')

// var a = 'b'
// var b = 'a'
// var a = eval(a)
// var b = eval(b)

// console.log('a = ', a)
// console.log('b = ', b)

// //a

// var arr = [1, 2, 3, 4]
// var ct = arr.length

// for (let i = 0; i < ct; i++) {
//   ct--
//   console.log(arr[i], i, arr[i] + i)
//   arr[i] += i

// }
// console.log(arr)
// // [1,3,3,4]

// const f = (...args) => {
//   console.log(args)

//   return args.push(7)
// }

// console.log([2, 4, 5])
//4  push returns new length of the array

// const newValue = parseInt('15', 10)
// console.log(newValue)
// //10

// const a = true
// function inc(x: number) {
//   return x + 1
// }
// let res = inc(29)
// if (1 != !true) {
//   res = inc(-1)
// }

// console.log(res)
// //0

// let a, b
// ;[a, b = 6] = [2]

// console.log(a + b)
// //8

// var b = 7
// var a = 0
// do {
//   console.log(b)
//   a++
// } while (a < 4)
// // print value of b 4 times

// var x, y, z
// x = 10
// y = x * 3
// y = y / x
// z = 10 % y
// log(z)
// // 1

// console.log(new Set([1, 1.0, '1', 1.0001]))
// Set(3) {1,'2',1.0001}

// var a = '2' < '8'
// var b = 2 < 8
// var c = undefined === null
// if (a && c) console.log('a')
// else if (a && b) console.log('b')
// else console.log('c')
// // b

// var a = true
// var b = false

// if (a && (b || a)) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// var a ={
//   a:3,
//   b: function () {
//     return this.a+2
//   },
//   c: function () {
//     return this.b() + 6
//   }
// }
// console.log(a.c());
// //11

// let name = 'DAVE'
// let school = 'OXFORD'

// name.toLocaleLowerCase()
// school = school.toLocaleLowerCase()
// console.log(name + school)

// let a = 'monkeyDluffy'
// var b = a.split('', 6)
// console.log(b)

// var res = 0
// for (var i = 1; i < 4; i += 2) {
//   if (i % 2 === 0) {
//     continue
//   }
//   res += i
//   // console.log(i, i % 2 === 0, res)
// }
// console.log('res:', res)
// res = 4

// console.log("AB'CD'EF")

// var a = 10
// var z = a > 5 ? a > 99 : a

// console.log(z);
// //false

// function summ(a: number, b: number) {
//   return a * b
// }

// var x = summ(11, 7)
// console.log(x, 77 / 6, 12 * 6, x % 6)

// var x = 0
// var arr = [4, 7, 2]
// arr[x] = x++
// console.log(arr[x])
