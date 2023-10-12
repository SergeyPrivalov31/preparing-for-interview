const str = "Казак";

//O(n)
function getPolindrom(str) {
  let revStr = str.split("").reverse().join("");
  if (str.toLowerCase() === revStr.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(getPolindrom(str));

function isEqual(firstChar, endChar) {
  return firstChar.toLowerCase() === endChar.toLowerCase();
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

//O(1)
//TODO: нужны тесты на правильность кода
function getPolindromConst(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const firstChar = str[start];
    const endChar = str[end];

    if (!isEqual(firstChar, endChar)) {
      return false;
    }

    if (isLetter(firstChar)) {
      start += 1;
      continue;
    }

    if (isLetter(endChar)) {
      end -= 1;
      continue;
    }

    start += 1;
    end -= 1;
  }
}

console.log(getPolindromConst(str));
