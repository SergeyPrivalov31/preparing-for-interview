//делает разреживание / каждые ms проверяем надо или нет / удобно для подгрузки информации ( к примеру скролллинг )

const f = throttle(console.log, 1000);
f(1);
f(2);
setTimeout(() => {
  f(3);
}, 100);
setTimeout(() => {
  f(4);
}, 500);
setTimeout(() => {
  f(5);
}, 900);

function throttle(callback, delay) {
  let isWaiting = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper(...args) {
    console.log(args);
    if (isWaiting) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    callback.apply(this, args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
      if (savedThis) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, delay);
  };
}
