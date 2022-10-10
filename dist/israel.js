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
class Deferred {
    then(param) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                Deferred.buffer = param(Deferred.buffer);
            }, 0);
        });
    }
    resolve(param) {
        Deferred.buffer = param;
    }
}
Deferred.buffer = '';
const d = new Deferred();
d.then(function (res) {
    console.log('1 ', res);
    return 'a';
});
d.then(function (res) {
    console.log('2 ', res);
    return 'b';
});
d.then(function (res) {
    console.log('3 ', res);
    return 'c';
});
d.resolve('hello');
