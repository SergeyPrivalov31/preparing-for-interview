import { useRef, useState } from "react";

export const ActionButtonRef = () => {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef();

  const handleChange = () => {
    setIsVisible(true);

    setTimeout(() => {
      inputRef.current.focus();
    });
  };

  //   useEffect(() => {
  //     isVisible && inputRef.current.focus();
  //   }, [isVisible]);

  return (
    <div>
      <button onClick={handleChange}>кнопка</button>
      {isVisible && <input ref={inputRef} />}
    </div>
  );
};
