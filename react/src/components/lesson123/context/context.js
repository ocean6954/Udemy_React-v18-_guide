import { createContext, useContext, useReducer } from "react";

export const ValueContext = createContext();
export const ValueDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...state, [payload.name]: payload.value };
    case "add":
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
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

export const ValueProvider = ({ children }) => {
  const initState = {
    a: 3,
    b: 4,
    result: 7,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ValueContext.Provider value={state}>
      <ValueDispatchContext.Provider value={dispatch}>
        {children}
      </ValueDispatchContext.Provider>
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  return useContext(ValueContext);
};

export const useValueDispatch = () => {
  return useContext(ValueDispatchContext);
};
