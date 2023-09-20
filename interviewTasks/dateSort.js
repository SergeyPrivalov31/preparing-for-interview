// Есть массив операций.
// Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве
// значений представить массивы c датами в формате MM-DD.
// Пример результата:
// result = {
// "2017": [
// "07-31",
// "08-22"
// ],
// "2018": [
// "01-01"
// "02-22"
// ]
// }
// */

//отсортировать массив по годам

const operations = [
  { date: "2017-07-31", amount: "5422" },
  { date: "2017-06-30", amount: "5220" },
  { date: "2017-05-31", amount: "5365" },
  { date: "2017-08-31", amount: "5451" },
  { date: "2017-09-30", amount: "5303" },
  { date: "2018-03-31", amount: "5654" },
  { date: "2017-10-31", amount: "5509" },
  { date: "2017-12-31", amount: "5567" },
  { date: "2018-01-31", amount: "5597" },
  { date: "2017-11-30", amount: "5359" },
  { date: "2018-02-28", amount: "5082" },
  { date: "2018-04-14", amount: "2567" },
];

// function sortOperations(operations) {
//   let result = {};
//   operations.sort((a, b) => new Date(a.date) - new Date(b.date));
//   operations.map((operation) => {
//     const date = new Date(operation.date);
//     const currentYear = date.getFullYear();
//     console.log(typeof result[currentYear]);
//     result[currentYear] = result[currentYear]
//       ? [...result[currentYear], `${date.getMonth()}-${date.getDate()}`]
//       : [`${date.getMonth()}-${date.getDay()}`];
//   });

//   return result;
// }

// function sortOperations(operations) {
//   return operations
//     .sort((a, b) => {
//       return new Date(a.date) - new Date(b.date);
//     })
//     .reduce((acc, item) => {
//       const [years, ...res] = item.date.split("-");
//       if (acc.hasOwnProperty(years)) {
//         acc[years].push(res.join("-"));
//       } else acc[years] = [res.join("-")];
//       return acc;
//     }, {});
// }

function sortOperations(operations) {
  //создаем пустой объект для результата
  const result = {};
  //сортируем массив операций по дате
  operations.sort((a, b) => new Date(a.date) - new Date(b.date));
  //проходимся по каждой операции
  operations.forEach((operation) => {
    //извлекаем год из даты операции
    const year = operation.date.slice(0, 4);
    //если год еще не добавлен в результат, то добавляем его и создаем пустой массив
    if (!result[year]) {
      result[year] = [];
    }
    //извлекаем месяц и день из даты операции и добавляем в массив для соответствующего года
    const monthDay = operation.date.slice(5);
    result[year].push(monthDay);
  });
  //возвращаем полученный результат
  return result;
}

console.log(sortOperations(operations));
