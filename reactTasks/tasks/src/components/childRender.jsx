import { useState, memo } from "react";

// const hardFunction = (props) => {
//   //.....blablablba
//   console.log(props);
//   return 1;
// };

export const ParentElement = () => {
  const [count, setCount] = useState(0);

  // const [cosunt, setCosunt] = useState(() => hardFunction(props.curr));

  const increment = () => setCount((prevProps) => ++prevProps);
  return (
    <>
      Parent: {count} <br />
      <SubElement clicker={increment} count={count} />
    </>
  );
};

// eslint-disable-next-line react/display-name
const SubElement = memo(
  // eslint-disable-next-line react/prop-types
  ({ clicker, count }) => {
    return (
      <>
        Sub: {count} <br />
        <button onClick={clicker}>Increment</button>
      </>
    );
  },
  (_perv, curr) => curr.count % 2 === 0
);
