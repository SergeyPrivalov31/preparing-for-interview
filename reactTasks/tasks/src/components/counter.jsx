import { useEffect, useRef, useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("interval", countRef);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  console.log("count", count);

  const handleClick = () => {
    setCount((count) => count + 1);
    countRef.current += 1;
  };
  console.log("render");
  return (
    <>
      <div>Задача</div>
      <h1>Counter / useRef / setInterval</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>сделать чтобы счётчик обновлял состояние, а интервал отображал состояние каждую секунду</p>
      </div>
    </>
  );
}

export default Counter;
