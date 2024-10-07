// function makeCoounter(){
//     let count = 0;
//     return function(){
//         return count++
//     }
// }

// const counter = makeCoounter()

// console.log(counter())
// console.log(counter())

/////////////////
// function sayHiBye(firstName, lastName) {

//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );
  
//   }

// sayHiBye('vasia', 'rogov')
/////////////////
// console.log(f())

// function f(){
//     return 1
// }
// var v = 2

// let arrowF = () => {
//     return 3
// }
// console.log(arrowF)
///////////////

// function sum(a){
//     return function(b){
//         return a + b
//     }
// }
// console.log(sum(5)(1))//6
// console.log(sum(50)(-8))//42

///////////////////////
// function inBetween(a,b){
//     return function(x){
//         return x >= a && x <=b
//     }
// }
// function inArray(arr){

//     return function(x){
//         return arr.includes(x)
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
/////////////////////

// let users = [
//     { name: "Иван", age: 20, surname: "Иванов" },
//     { name: "Пётр", age: 18, surname: "Петров" },
//     { name: "Анна", age: 19, surname: "Каренина" }
//   ];
  

//   function byField(fieldName){
//     return (a,b) => a[fieldName] > b[fieldName] ? 1 : -1
//   }
  
//   console.log(users.sort(byField('name')));
//   console.log(users.sort(byField('age')));

/////////////////////////////////////////////////

// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//         let j = i //локальная переменная или переделать на for
//       let shooter = function() { // функция shooter
//         console.log( j ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter); // и добавлять стрелка в массив
//       i++;
//     }
  
//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
//   army[0](); // 10 от стрелка с порядковым номером 0
//   army[1](); // 10 от стрелка с порядковым номером 1

  ///////////////////////////