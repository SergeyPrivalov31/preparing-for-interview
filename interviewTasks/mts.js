// console.log(1);

// setTimeout(() => console.log(2), 0);

// console.log(3);

// Promise.resolve()
//  .then(() => console.log(4))
//  .then(() => console.log(5))
//  .then(() => console.log(6))
//  .then(() => setTimeout(() => console.log(7), 0))
//  .then(() => {
//      console.log(8);
//      return 9;
//  })
//  .then((console.log)

// 1 3 4 5 6 8 9 2 7 -> верно

// ///
// const numbers = {
//  numberA: 5,
//  numberB: 10,

//  sum: function() {
//    const calculate() =>  {
//      return this.numberA + this.numberB;
//    }

//    return calculate();
//  }
// };

// numbers.sum();

// const people: People[] = [
//  {
//    age: 30,
//    name: 'Дэн',
//    lastName: 'Абрамов'
//  },
//  {
//    name: 'Юлия',
//    lastName: 'Иванова'
//  },
// ]

// type People = {
//     age?: number
//     name: string
//     lastName: string
// }
// type Peoples = Array<People>

// //Написать типизированную функцию которая принимает аргумент people и возвращает массив объектов без age

// const typedFunction = (people: Peoples): Omit<People, 'age'>[] => {
// return people.map(({name, lastName})=> {
//     return {name, lastName}
// })
// }
//тут можно так .map((age) => {age, ...rest})
