
const str = 'AbCd'



//2 В некоторых средах может быть медленнее чем Array.from из за оператора расширения
// const goReduceRightSpread = (str) => {
//     return [...str].reduceRight((acc, char) => acc + char ,'')
// }
// console.log(goReduceRightSpread(str))

//1
// const goReduceRightArrayFrom = (str) => {
//     return Array.from(str).reduceRight((acc, char) => acc + char, '')
// }
// console.log(goReduceRightArrayFrom(str))

//3 создает три промежуточных массива что может быть не эффективно по памяти
// const goSplitReverseJoin = (str) => {
//     return str.split('').reverse().join('')
// }
// console.log(goSplitReverseJoin(str))

//0 Самый простой, не создаёт доп структур данных
// const goReverseByFor = (str) => {
//     let reversed= ''
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(goReverseByFor(str))

//4 O(n^2) из за рекурсии и многократного вызова substr
// const goRecursion = (str) => {
//     if(str === ''){
//         return '';
//     } else {
//         return goRecursion(str.substr(1)) + str[0];
//     }
// }
// console.log(goRecursion(str))

// const goReduceNoSplit = (str) => {
//     return Array.prototype.reduce.call(str, (acc, char) => char + acc, '');
// }
// console.log(goReduceNoSplit(str)); // 'dCbA'