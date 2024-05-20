import { useValueDispatch } from "../context/context";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Select = () => {
  const dispatch = useValueDispatch();

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
