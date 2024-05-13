import { useState } from "react";

const Lesson51 = () => {
  const personObj = { name: "Tom", age: "12" };

  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({ name: e.target.value, age: person.age });
  };
  const formReset = () => {
    setPerson({ name: "", age: "" });
  };
  return (
    <>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <input value={person.name} onChange={changeName}></input>
      <br />
      <input
        value={person.age}
        onChange={(e) => {
          setPerson({ name: person.name, age: e.target.value });
        }}
      ></input>
      <br />
      <button onClick={formReset}>リセット</button>
    </>
  );
};

export default Lesson51;
