// function sum(a) {
//   let currentSum = a;
//   function addNext(b) {
//     if (!b) {
//       return currentSum;
//     }
//     currentSum += b;
//     return addNext;
//   }
//   return addNext;
// }

// console.log(sum(1)(2)(3)());

const sumFn = (a, b, c) => {
  return a + b + c;
};
const multyFn = (a, b, c) => {
  return a * b * c;
};

const curryedSum = curryHoc(sumFn);
const curryedMulty = curryHoc(multyFn);

function curryHoc(fn) {
  return function curryed(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    //накопит контекст аргументов вызовов и когда условие выполнится вызовет callback на 24 строке
    return curryed.bind(this, ...args);
  };
}

console.log(curryedSum(1)(2)(4)); //-->7
console.log(curryedSum(1, 2)(4)); //-->7
console.log(curryedSum(1, 2, 4)); //-->7
console.log(curryedMulty(1)(2)(4)); //-->8
console.log(curryedMulty(1, 2)(4)); //-->8
console.log(curryedMulty(1, 2, 4)); //-->8
