import Input from "./input";
import Select from "./select";
import Result from "./result";
import { ValueProvider, useValue } from "../context/context";

const Lesson122 = () => {
  const state = useValue();
  return (
    <>
      <ValueProvider value={state}>
        <Input name={"a"} />
        <Input name={"b"} />
        <Select />
        <Result />
      </ValueProvider>
    </>
  );
};
export default Lesson122;
