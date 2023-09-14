// Необходимо реализовать функцию,которая удалит в строке
// все повторяющиеся подряд символы таким образом, чтобы
// на выходе получилось:
// "Кот Барсик запрыгнул на забор"

const sentence = "Кккоооот Бааарссиккк зззапрыыгнннул   наааа зааабоооррррр";

function removeRepeats(s) {
  let newS = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) {
      newS += s[i];
    }
  }
  return newS;
}

console.log(removeRepeats(sentence));
console.log(removeRepeats(sentence) === "Кот Барсик запрыгнул на забор");
