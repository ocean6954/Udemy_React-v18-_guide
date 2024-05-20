import TodoProvider from "./Context";
import Input from "./Input";
import TodoList from "./TodoList";

const Lesson123 = () => {
  return (
    <>
      <TodoProvider>
        <TodoList />
        <Input />
      </TodoProvider>
    </>
  );
};

export default Lesson123;
