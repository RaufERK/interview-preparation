"use strict";
// // Write the class "Deferred"
// // usage example
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
// class Different extends Promise
// class Different extends Promise {
//   constructor(name: any) {
//     super((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1)
//       }, 1)
//     })
//     this.name = name
//   }
// }
// const d = new Different()
// d.then((data) => console.log())
// const myPomise = new Promise((res, rej) => setTimeout(() => res('YES'), 1000))
// myPomise.then((data) => console.log(data))
class Deferred extends Promise {
    constructor() {
        super((resolve, reject) => {
            setTimeout(() => {
                // console.log(this.myFoo.next(), '<<=')
                resolve(++this.index + '');
                // reject()
            }, 1000);
        });
        this.index = 0;
    }
    resolve(param) {
        console.log(++this.index + '', param);
    }
    static get [Symbol.species]() {
        return Promise;
    }
}
// const p = new MyPromise('HeeeYY!')
// p.then((data) => console.log(data))
// p.resolve('hellow!')
var d = new Deferred();
d.then((res) => {
    console.log('1 ', res);
    return 'a';
}).catch((err) => console.log(err));
d.then(function (res) {
    console.log('2 ', res);
    return 'b';
}).catch((err) => console.log(err));
d.then(function (res) {
    console.log('3 ', res);
    return 'c';
}).catch((err) => console.log(err));
// // at this point, nothing is printed to console (yet)
d.resolve('hello');
// // output of usage example
// // 1 hello
// // 2 a
// // 3 b
// const foo = function* (param: string) {
//   let index = 0
//   while (true) {
//     yield index++
//   }
// }
// const myGen = foo('test')
// console.log(myGen.next(111))
// console.log(myGen.next(222))
// console.log(myGen.next(333))
