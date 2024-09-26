import { useEffect, useState } from "react";

export const IntervalEx = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
