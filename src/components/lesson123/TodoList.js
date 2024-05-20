import { useTodo } from "./Context";
import Item from "./Item";

const TodoList = () => {
  const states = useTodo();

  return (
    <>
      {states.map((state) => (
        <Item state={state} key={state.id} />
      ))}
    </>
  );
};

export default TodoList;
