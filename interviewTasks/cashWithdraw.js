// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.

// function getMoney(amount, limits = { 50: 10, 100: 10, 500: 10, 1000: 10, 5000: 10 }) {
//   //0. создать массив номиналов
//   //1. Найти ближайшую купюру которая меньше, чем сумма на выдачу.
//   //2. Делим сумму на выдачу на купюру которая меньше // получили целое значение
//   //3. Записываем в result колличество купюр данного наминала
//   //4. Вычесть из amount количество купюр, умноженное на номинал этих купюр
//   //5. Цикл работает пока amount > 0

//   let result = { 5000: 0, 1000: 0, 500: 0, 100: 0, 50: 0 };

//   let nominals = limits ? Object.keys(limits).sort((a, b) => b - a) : [5000, 1000, 500, 100, 50];

//   if (amount % nominals[nominals.length - 1] !== 0) {
//     throw new Error("Сумма должна быть кратна 50");
//   }
//   let remainingAmount = amount;
//   let i = 0;

//   while (i < nominals.length - 1) {
//     let denomination = limits
//       ? Math.min(Math.floor(remainingAmount / nominals[i]), limits[nominals[i]])
//       : Math.floor(remainingAmount / nominals[i]);
//     result[nominals[i]] = denomination;
//     remainingAmount -= denomination * nominals[i];
//     i++;
//   }
//   console.log(result);
//   if (remainingAmount !== 0) {
//     throw new Error("Не хватает купюр");
//   }

//   return result;
// }
// getMoney(6200, {
//   5000: 3,
//   1000: 7,
//   100: 5,
// });

function getMoney(amount, limits = { 50: 10, 100: 10, 500: 10, 1000: 10, 5000: 10 }) {
  const result = { 50: 0, 100: 0, 500: 0, 1000: 0, 5000: 0 };
  let remainingAmount = amount;

  // Сортируем номиналы по убыванию
  const denominations = Object.keys(limits).sort((a, b) => b - a);

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const limit = limits[denomination];
    const maxCount = Math.min(Math.floor(remainingAmount / denomination), limit);
    result[denomination] = maxCount;
    remainingAmount -= maxCount * denomination;
    limits[denomination] -= maxCount;
  }

  if (remainingAmount !== 0) {
    throw new Error("Недостаточно купюр в банкомате");
  }

  return result;
}

console.log(getMoney(6200)); // {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}
console.log(getMoney(6200, { 5000: 0, 1000: 7, 100: 5 })); // {5000: 0, 1000: 6, 500: 0, 100: 2, 50: 0}
