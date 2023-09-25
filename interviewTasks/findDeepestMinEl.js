const arr2 = [1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]];

function findDeepestMinElement(arr) {
  let result = {};
  let depth = 0;
  function trueFunction(arr, currentdepth) {
    for (let i = 0; i <= arr.length - 1; i++) {
      /////////////
      if (Array.isArray(arr[i])) {
        trueFunction(arr[i], currentdepth + 1);
      } else {
        if (!result[currentdepth]) {
          result[currentdepth] = [];
        }
        result[currentdepth].push(arr[i]);
      }
    }
  }
  trueFunction(arr, depth);
  const resultDepth = Math.max(...Object.keys(result));
  const resultValue = Math.min(...result[resultDepth]);
  return [resultDepth, resultValue];
}

console.log(findDeepestMinElement(arr2)); // [3, 100]
