// Задача "1046. Last Stone Weight" на LeetCode требует от нас обработать массив камней, где каждый камень имеет определенный вес. На каждом шаге мы берем два самых тяжелых камня и сталкиваем их вместе. Если веса камней равны, оба камня разрушаются. Если веса различны, остается камень с весом, равным разнице весов двух камней. Игра продолжается до тех пор, пока не останется один камень или не останется камней вообще. Нам нужно вернуть вес последнего оставшегося камня, или 0, если камней не осталось.

// Для решения этой задачи мы можем использовать максимальную кучу (max heap), чтобы эффективно извлекать два самых тяжелых камня на каждом шаге. Вот шаги для решения задачи:

// Построить максимальную кучу из массива камней.

// Извлечь два максимальных элемента из кучи.

// Вычислить разницу между этими двумя элементами.

// Если разница не равна нулю, добавить новый камень с весом, равным этой разнице, обратно в кучу.

// Повторять шаги 2-4, пока в куче не останется один или ни одного камня.

// Вернуть вес последнего оставшегося камня или 0, если камней не осталось.


function lastStoneWeight(stones) {
  // Функция для поддержания свойства кучи
  function heapify(arr, n, i){
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  // Функция для извлечения максимального элемента из кучи
  function extractMax(arr) {
    const max = arr[0];
    const n = arr.length;
    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
    arr.pop();
    heapify(arr, arr.length, 0);
    return max;
  }

  // Построение кучи
  const n = stones.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(stones, n, i);
  }

  while (stones.length > 1) {
    const y = extractMax(stones);
    const x = extractMax(stones);
    if (y - x > 0) {
      stones.push(y - x);
      let i = stones.length - 1;
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (stones[parent] >= stones[i]) break;
        [stones[i], stones[parent]] = [stones[parent], stones[i]];
        i = parent;
      }
    }
  }

  return stones.length === 0 ? 0 : stones[0];
}
console.log(lastStoneWeight([2,7,4,8,2,15,22,1,1,1,22]))