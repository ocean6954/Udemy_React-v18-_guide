import List from "./List";
import Form from "./Form";
import { useState } from "react";

const Todo = () => {
  const list = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todoLists, setTodoLists] = useState(list);

  return (
    <>
      <h2>Reminder</h2>
      <List lists={todoLists} setTodoLists={setTodoLists} />
      <Form lists={todoLists} setTodoLists={setTodoLists} />
    </>
  );
};

export default Todo;
