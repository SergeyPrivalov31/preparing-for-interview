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

export function debounce(callback, delay) {
  let timer;
  return function (...args) {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
