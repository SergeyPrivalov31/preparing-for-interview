//схлопываем вызов / вызывается если остановились

// const f = debounce(console.log, 1000);

// f(1);
// f(2);

// setTimeout(() => {
//   f(3);
// }, 100);

// setTimeout(() => {
//   f(4);
// }, 500);

// setTimeout(() => {
//   f(5);
// }, 1600);

// export function debounce(callback, delay) {
//   let timer;
//   return function (...args) {
//     console.log(args);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback.apply(this, args);
//     }, delay);
//   };
// }



export const debounce = function(callback, delay){
  let timer
  return function(...args){
    clearTimeout()
    timer = setTimeout(() => {
      callback.apply(this, args)
    },delay)
  }
}

const f = debounce(console.log, 10000)
const f2 = debounce(console.log, 5000)


f(5)
f2(10)