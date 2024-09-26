import { useState, useEffect } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}