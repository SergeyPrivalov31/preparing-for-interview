import { useEffect, useLayoutEffect } from "react";

export const WhoTheFirst = () => {
  useLayoutEffect(() => console.log("layout"));
  console.log("console");
  useEffect(() => console.log("effect"));
  setTimeout(() => console.log("temeOut"));
  return (
    <>
      <h3>Открой консоль</h3>
    </>
  );
};
