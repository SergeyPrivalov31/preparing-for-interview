// написать функцию, либо последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке букв,
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых букв

function getResult(collection) {
    // Фильтрация непросроченных записей
    const validRecords = collection.filter(item => !item.expired);

    // Сортировка по полю order
    validRecords.sort((a, b) => a.order - b.order);

    // Разворот строк и сбор символов в одну строку
    let result = '';
    const seen = new Set();

    validRecords.forEach(item => {
        const reversedValue = item.value.split('').reverse().join('');
        for (const char of reversedValue) {
            if (!seen.has(char)) {
                result += char;
                seen.add(char);
            }
        }
    });

    return result;
}

// Пример использования
const collection = [
    { value: 'apple', order: 3, expired: false },
    { value: 'banana', order: 1, expired: true },
    { value: 'cherry', order: 2, expired: false },
    { value: 'date', order: 4, expired: false }
];

console.log(getResult(collection)); // Вывод: "yrhceda"