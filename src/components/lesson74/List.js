import {
  VStack,
  StackDivider,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({ lists, setTodoLists }) => {
  const deleteList = (id) => {
    const newArray = lists.filter((list) => list.id !== id);
    console.log(`${id}番めのリストを削除しました`);
    setTodoLists(newArray);
  };

  return (
    <VStack
      divider={<StackDivider />}
      // color={{ sm: "red.600", md: "blue.600", lg: "green.200", xl: "red.200" }}
      borderColor="teal.100"
      borderWidth="3px"
      borderRadius="3px"
      p={5}
      alignItems="start"
    >
      {lists.map((list) => {
        return (
          <HStack key={list.id} spacing="5">
            <IconButton
              onClick={() => deleteList(list.id)}
              // style={buttonStyle}
              icon={<VscCheck />}
              isRound
              bgColor="cyan.100"
              opacity="0.5"
            >
              完了
            </IconButton>
            <Text>{list.content}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
