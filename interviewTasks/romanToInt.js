function romanToInt(s){
    const romanMap= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let i = 0;

    while (i < s.length) {
        const currentChar = s[i];
        const nextChar = s[i + 1];

        const currentVal = romanMap[currentChar];
        const nextVal = romanMap[nextChar];

        if (currentVal === undefined) {
            throw new Error(`Invalid Roman numeral character: ${currentChar}`);
        }

        if (nextVal !== undefined && currentVal < nextVal) {
            result += nextVal - currentVal;
            i += 2; // Skip the next character as it has been processed
        } else {
            result += currentVal;
            i += 1;
        }
    }

    return result;
}
console.log(romanToInt('MMXXIV'))