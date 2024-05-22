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

    case "handleToggle":
      const editingArray = [...state];
      const editingID = editingArray.findIndex(
        (element) => element.id === payload.id
      );

      if (editingID !== -1) {
        editingArray.splice(editingID, 1, {
          id: payload.id,
          content: payload.content,
          isEditing: payload.isEditing,
        }); // 要素を置き換える
      }

      return editingArray;

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
      content: "Test1です",
      isEditing: false,
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testその2です",
      isEditing: false,
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testその3です",
      isEditing: false,
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testその4です",
      isEditing: false,
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Testその5です",
      isEditing: false,
    },
  ];

  const [state, dispatch] = useReducer(reducer, initState);
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
