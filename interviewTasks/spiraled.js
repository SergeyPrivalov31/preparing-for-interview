const arr1 = [
  [1, 2, 3, 4, 5],
  [14, 15, 16, 17, 6],
  [13, 20, 19, 18, 7],
  [12, 11, 10, 9, 8],
];

const getSpiraledFlatArray = (arr) => {
  const result = [];

  function spirealedCicle(arr) {
    const leftArr = []; //3
    const rightArr = []; //3
    const nextArr = []; //3
    for (let i = 0; i <= arr.length - 1; i++) {
      if (i === 0) {
        result.push(...arr[i]); //1
      } else if (i === arr.length - 1) {
        result.push(...rightArr); //4
        result.push(...arr[i].reverse()); //2, 5
        result.push(...leftArr.reverse()); //6
      } else {
        leftArr.push(arr[i][0]);
        rightArr.push(arr[i][arr.length]);
        nextArr.push(arr[i].slice(1, arr.length));
      }
    }
    if (nextArr.length !== 0) {
      spirealedCicle(nextArr);
    }

    return result;
  }
  return spirealedCicle(arr);
};

console.log(getSpiraledFlatArray(arr1));
