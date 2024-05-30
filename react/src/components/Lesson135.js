import { useCount } from "./hooks";

const Lesson135 = () => {
  const { count, reset, countUp } = useCount();
  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Lesson135;
