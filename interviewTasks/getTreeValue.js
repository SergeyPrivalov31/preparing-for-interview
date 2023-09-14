// Есть дерево обьектов формата
// {
//    left: {},
//    right: {},
//    value: <number>
// }
// Поля left и right опционально содержат в себе обьект с такой же
// структурой. Value присутствует всегда.
//
// Необходимо посчитать сумму всех value.

const tree = {
  left: {
    left: {
      left: {
        right: {
          left: {
            value: 7,
          },
          right: {
            value: 14,
          },
          value: 66,
        },
        value: 23,
      },
      value: 90,
    },
    right: {
      value: 67,
    },
    value: 34,
  },
  right: {
    value: 11,
  },
  value: 16,
};

function treeValueSumm(value) {
  let arr = [];
  if (value.value) {
    arr.push(Object.values(value).reduce((a, b) => b, 0));
  }
  if (value.left) {
    arr.push(treeValueSumm(value.left));
  }
  if (value.right) {
    arr.push(treeValueSumm(value.right));
  }
  return arr.reduce((acc, current) => acc + current, 0);
}

console.log(treeValueSumm(tree));
console.log(treeValueSumm(tree) === 328);
