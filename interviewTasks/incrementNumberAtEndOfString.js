/**
 * @param {String} str
 * @returns {String}
 */

// const incrementNumberAtEndOfString = (str) => {
//     const numberPattern = /(\d+)$/
//     const match = str.match(numberPattern)
//     if(match){
//         const number = match[0]
//         const numberToDigit = parseInt(number, 10)
//         return str.replace(numberPattern, numberToDigit + 1)
//     } else {
//         return str + "1"
//     }
//   };

const incrementNumberAtEndOfString = (str) => {

    let numberStr = '';
    let i = str.length - 1;

    while(i >= 0 && !isNaN(str[i])){
        numberStr += str[i]
        i--;
    }
    if(numberStr){
    const number = parseInt(numberStr, 10);
    return str.replace(numberStr, number + 1)} else {
        return str + '1'
    }

}
  
  console.log(incrementNumberAtEndOfString("jsgrill1")); // jsgrill2
  console.log(incrementNumberAtEndOfString("jsgrill")); // jsgrill1
  console.log(incrementNumberAtEndOfString("jsgrill9")); // jsgrill10
  console.log(incrementNumberAtEndOfString("jsgrill99")); // jsgrill100
  console.log(incrementNumberAtEndOfString("")); // 1