// const memoize = (fn) => {
//   const cache = new Map();

//   return function(...args){
//     const key = JSON.stringify(args)
//       if(cache.has(key)){
//         return console.log(`${cache.get(key)},`, 'from cache')
//       }
//       const result = fn(...args)
//       cache.set(key, result)
//       return console.log(`${result}, `, 'calculate')
//   }

// }

// function sum(a,b,c) {
//   // console.log('calculate plus')
//   return a + b + c;
// }
// function minus(a,b,c) {
//   // console.log('calculate minus')
//   return a - b - c;
// }

// const memoizeSum = memoize(sum);
// const memoizeMinus = memoize(minus);
// memoizeSum(1,2,3) // 6, calculate
// // memoizeSum(3,2,1) // 6, calculate
// memoizeSum(1,2,3) // 6, from cache
// memoizeMinus(1,2,3)
// memoizeMinus(1,2,3)
// memoizeMinus(1,2,3)
// memoizeMinus(1,2,3)
// memoizeMinus(1,5,3)
// memoizeMinus(1,5,3)

// function counterCreator() {
//     let count = 0;
  
//     return function() {
//       count += 1;
//       return count;
//     };
//   }
  
//   const counter = counterCreator()
//   const counter2 = counterCreator()
  
  
//   console.log(counter()); // 1
//   console.log(counter()); // 2
//   console.log(counter()); // 3
//   console.log(counter2()); // 3
//   console.log(counter2()); // 3
//   console.log(counter2()); // 3
//   console.log(counter2()); // 3
// const simbol = Symbol
// console.log(
//     typeof null,
//     typeof undefined,
//     typeof 1,
//     typeof '1',
//     typeof ['1'],
//     typeof {1:''},
//     typeof simbol('£')
// )