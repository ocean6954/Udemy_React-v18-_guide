import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  // console.log(state);
  switch (type) {
    case "change":
      return { ...state, [payload.name]: payload.value };
    case "add":
      return { ...state, result: state.a + state.b };
    case "minus":
      return { ...state, result: state.a - state.b };
    case "divide":
      return { ...state, result: state.a / state.b };
    case "multiply":
      return { ...state, result: state.a * state.b };
    default:
      throw new Error("不明なタイプです");
  }
};

const Lesson116 = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const calculate = (e) => {
    console.log(e.target.value);
    dispatch({ type: e.target.value });
  };

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <h3>結果: {state.result}</h3>
    </>
  );
};

export default Lesson116;
