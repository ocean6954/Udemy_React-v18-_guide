import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const countUp = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);

  return { count, countUp, reset };
};

export { useCount };
