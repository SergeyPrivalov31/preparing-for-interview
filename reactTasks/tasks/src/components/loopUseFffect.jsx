import { useState, useEffect } from "react";

export function LoopUseFffect() {
  const [state, setState] = useState(0);
  const [wstate, setwState] = useState({ c: 0 });
  //   console.log(1);

  //   const start = Date.now();
  //   while (Date.now() - start < 50) {
  //     window.timestamp = Date.now();
  //   }

  useEffect(() => {
    console.log(wstate);
  }, [wstate]);

  //   Promise.resolve().then(() => console.log(3));

  //   setTimeout(() => console.log(4), 0);

  const onClick = () => {
    console.log(5);
    setState((num) => num + 1);
    console.log(6);
  };

  return (
    <div>
      <button
        onClick={() => {
          if (wstate.c === 3) {
            setwState({ c: 3 });
          } else {
            setwState({ c: wstate.c + 1 });
          }
        }}
      >
        click me
      </button>
    </div>
  );
}
