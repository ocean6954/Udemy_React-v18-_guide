import { useState } from "react";

const Lesson58 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountResult count={count} />
      <CountUpdate count={count} setCount={setCount} />
    </>
  );
};
const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

const CountResult = ({ count }) => {
  return (
    <>
      <h3>カウント:{count}</h3>
    </>
  );
};

export default Lesson58;
