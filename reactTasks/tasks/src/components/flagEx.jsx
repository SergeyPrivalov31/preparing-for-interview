import { useEffect, useState } from "react";

export const FlagEx = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setFlag(true);
      console.log("effect run");
    }

    return () => console.log("effect clean up");
  }, [flag]);

  console.log("render");

  return <div>Открой консоль</div>;
};
