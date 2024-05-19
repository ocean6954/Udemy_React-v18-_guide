import { createContext, useContext, useReducer } from "react";

export const ValueContext = createContext();
export const ValueDispatchContext = createContext();
// export const CalcContext = createContext();

const reducer = (state, { type, payload }) => {
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

const initState = {
  a: 3,
  b: 4,
  result: 7,
};

export const ValueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ValueContext.Provider value={state}>
      <ValueDispatchContext.Provider value={dispatch}>
        {/* <CalcContext.Provider value={CALC_OPTIONS}> */}
        {children}
        {/* </CalcContext.Provider> */}
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

// export const useCalcContext = () => {
//   return useContext(CalcContext);
// };
