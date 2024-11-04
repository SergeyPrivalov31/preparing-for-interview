import { useToggle } from "../hooks/useToggle";

const ToggleComponent = () => {
  const [isActive, toggle] = useToggle(true);

  return (
    <div>
      <p>Состояние: {isActive ? "Активно" : "Неактивно"}</p>
      <button onClick={toggle}>Переключить</button>
    </div>
  );
};

export default ToggleComponent;
