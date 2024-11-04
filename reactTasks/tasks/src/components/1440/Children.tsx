import React from "react";

export const Child = ({ onEvent }) => {
  const handleClick = () => {
    //  отправка данных родителю
    onEvent("Отправить данные родителю");
  };

  return <button onClick={handleClick}>Отправить данные родителю</button>;
};
