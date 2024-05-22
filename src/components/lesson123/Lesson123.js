import { useState } from "react";
import TodoProvider from "./Context";
import Input from "./Input";
import TodoList from "./TodoList";

const Lesson123 = () => {
  const [bool, setBool] = useState(false);
  const toggle = () => {
    // console.log(prev);
    // console.log(setBool((prev) => !prev));

    setBool((prev) => !prev);
    console.log(bool);
    console.log(!bool);
  };
  return (
    <>
      <TodoProvider>
        <TodoList />
        <Input />
      </TodoProvider>

      <button
        onClick={toggle}
        style={{
          backgroundColor: bool ? "lightblue" : "lightcoral",
          display: "block",
        }}
      >
        切り替え
      </button>
    </>
  );
};

export default Lesson123;
