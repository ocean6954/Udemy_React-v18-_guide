import { Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Form = ({ lists, setTodoLists }) => {
  const [newContent, setNewContent] = useState("");
  const toast = useToast();

  const addList = () => {
    if (!newContent) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newArray = [...lists, { content: newContent, id: lists.length + 1 }];
    setTodoLists(newArray);
    setNewContent("");
  };

  return (
    <>
      <Input
        type="text"
        placeholder="新しいタスク"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <Button onClick={addList}>追加</Button>
    </>
  );
};

export default Form;
