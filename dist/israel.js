"use strict";
// // Write the class "Deferred"
// // usage example
// // at this point, nothing is printed to console (yet)
// d.resolve('hello')
// // output of usage example
// // 1 hello
// // 2 a
// // 3 b
// // ========================
// //const callBackFoo = (res)=>{ console.log("1 ", res); return "a"; }
// class Deferred {
//   static arr: string[] = []
//   constructor() {
//     this.then = (foo) => {
//       const res = foo()
//       Deferred.arr.push(res)
//     }
//     this.resolve = (param) => {
//       Deferred.arr.forEach((item, index) => {
//         if (index === 0) {
//           console.log(index + 1, param)
//         } else {
//           console.log(index + 1, item)
//         }
//       })
//     }
//   }
// }
// const res = 'res'
// var d = new Deferred()
// d.then(function (res) {
//   console.log('1 ', res)
//   return 'a'
// })
// d.then(function (res) {
//   console.log('2 ', res)
//   return 'b'
// })
// d.then(function (res) {
//   console.log('3 ', res)
//   return 'c'
// })
