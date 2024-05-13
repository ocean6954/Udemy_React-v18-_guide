import { useState } from "react";

const Lesson53 = () => {
  const itemObj = { name: "apple", count: 10 };
  const [item, setItem] = useState(itemObj);
  const changeItem = (e) => setItem({ ...item, name: e.target.value });
  const countUp = () => setItem((item) => ({ ...item, count: item.count + 1 }));
  const countDown = () => setItem({ ...item, count: item.count - 1 });
  return (
    <>
      <p>Item: {item.name}</p>
      <p>Count: {item.count}</p>
      <input value={item.name} onChange={changeItem}></input>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Lesson53;
