import { useState } from "react";

export const useToggle = (initialState = false) => {
  // Инициализируем состояние с переданным начальным значением
  const [isActive, setIsActive] = useState(initialState);

  // Функция для переключения состояния
  const toggle = () => {
    setIsActive((prevState) => !prevState);
  };

  // Возвращаем текущее состояние и функцию для его переключения
  return [isActive, toggle];
};


