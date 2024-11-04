import React, { useEffect, useState } from "react";
import { Child } from "./Children";
export const Parent = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChildEvent = (data) => {
    console.log("Данные от дочернего компонента:", data);
  };

  return (
    // <div>
    //   <div>Value: {value}</div>
    //   <div>CurrentValue: {currentValue}</div>
    // </div>

    <Child onEvent={handleChildEvent} />
  );
};
