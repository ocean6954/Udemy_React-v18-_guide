import styled from "styled-components";
import { useState } from "react";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background: pink;
`;

const SecondButton = styled(FirstButton)`
  background: red;
  color: #fff;
`;

const ThirdButton = styled(SecondButton)`
  background: ${(isDark) => (isDark ? "black" : "green")};
`;

const Lesson80 = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((prev) => !prev);
  return (
    <>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton isDark={isDark} onClick={toggleDark}>
        ボタン3
      </ThirdButton>
    </>
  );
};

export default Lesson80;
