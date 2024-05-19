import { useValue } from "../context/context";
const Result = () => {
  const result = useValue();
  console.log("result");

  return (
    <>
      <h1>結果: {result.result}</h1>
    </>
  );
};

export default Result;
