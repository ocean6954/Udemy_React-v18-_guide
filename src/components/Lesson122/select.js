import { useValueDispatch } from "../context/context";

const Select = () => {
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
  const dispatch = useValueDispatch();
  console.log("selectです");
  return (
    <>
      <select
        onChange={(e) => {
          dispatch({ type: e.target.value });
        }}
      >
        {CALC_OPTIONS.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
