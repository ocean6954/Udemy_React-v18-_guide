import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

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

const reducer = (state, { type, payload }) => {
  //type,payloadは分割代入。もしくはactionとだけ書いて、action.typeのような形で取得する
  switch (type) {
    case "todo/add":
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
      console.log(editingID);
      if (editingID !== -1) {
        editingArray.splice(editingID, 1, {
          id: payload.id,
          content: payload.content,
          isEditing: payload.isEditing,
        }); // 要素を置き換える
      }
      return editingArray;

    case "change":
      const changeArray = [...state];
      const changeIndex = changeArray.findIndex(
        (element) => element.id === payload.id
      );
      if (changeIndex !== -1) {
        changeArray.splice(changeIndex, 1, {
          id: payload.id,
          content: payload.content,
          isEditing: true,
        });
      }
      return changeArray;

    case "todo/delete":
      const newArray = state.filter((sta) => sta.id !== payload.id);
      console.log(`id:${payload.id}のリストを削除しました`);
      return newArray;

    default:
      throw new Error("不明なアクションです");
  }
};

const TodoProvider = ({ children }) => {
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
