import { useTodoDispatch } from "./Context";
import { useState } from "react";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useTodoDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({
      type: "todo/add",
      payload: { id: Math.floor(Math.random() * 1e5), content: inputValue },
    });
    setInputValue("");
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>
        追加
      </button>
    </>
  );
};

export default Input;
