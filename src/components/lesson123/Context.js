import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return [
        ...state,
        {
          id: payload.id,
          content: payload.content,
          isEditing: false,
        },
      ];
    case "edit":
      return {
        ...state,
        id: payload.id,
        content: payload.content,
        isEditing: false,
      };
    case "complete":
      const newArray = state.filter((sta) => sta.id !== payload.id);
      console.log(`id:${payload.id}のリストを削除しました`);

      return newArray;
    default:
      throw new Error("不明なアクションです");
  }
};

const TodoProvider = ({ children }) => {
  const initState = [
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testです",
      isEditing: false,
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testその2です",
      isEditing: false,
    },
  ];
  const [state, dispatch] = useReducer(reducer, initState);

  // console.log(state);
  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => {
  return useContext(TodoContext);
};

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};
