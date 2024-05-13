import Todo from "./lesson74/Todo";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";

const Lesson74 = () => {
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Lesson74;
