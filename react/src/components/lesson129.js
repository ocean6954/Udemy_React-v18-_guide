import { useEffect, useState } from "react";

const Lesson129 = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) alert("checked!");
  }, [checked]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          onClick={() => setChecked((checked) => !checked)}
        />
        <span>click me</span>
      </label>
    </>
  );
};

export default Lesson129;
