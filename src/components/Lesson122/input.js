import { useValueDispatch, useValue } from "../context/context";

const Input = ({ name }) => {
  const dispatch = useValueDispatch();
  const state = useValue();
  console.log(`input:${name}です`);
  return (
    <>
      <div>
        {name}:
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={(e) =>
            dispatch({
              type: "change",
              payload: { name: name, value: e.target.value },
            })
          }
        ></input>
      </div>
    </>
  );
};

export default Input;
