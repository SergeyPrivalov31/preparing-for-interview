import { useState, useEffect } from "react";

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

export const Refactoring = () => {
  const [number, setNumber] = useState(null);
  const [scroll, setScroll] = useState(() => window.scrollY);

  useEffect(() => {
    // Получаем число асинхронно
    fetchRandomNumber().then(setNumber);

    // Добавляем обработчик события scroll
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик события scroll при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только при монтировании

  return (
    <div>
      <div>Number: {number !== null ? number : "Loading..."}</div>
      <div>Scroll Y: {scroll}</div>
      <div className={{ height: "10000px" }}></div>
    </div>
  );
};
