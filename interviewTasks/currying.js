function sum(a) {
  let currentSum = a;
  function addNext(b) {
    if (!b) {
      return currentSum;
    }
    currentSum += b;
    return addNext;
  }
  return addNext;
}

console.log(sum(1)(2)(3)());
