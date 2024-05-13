import { useState } from "react";

const Lesson64 = () => {
  const persons = [
    { name: "Geo", age: 21, hobbies: ["soccer", "music"] },
    { name: "Tom", age: 26, hobbies: ["game", "特になし"] },
    { name: "Yuri", age: 24, hobbies: ["造花", "茶道"] },
  ];
  const [filterValue, setFilterValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <ul>
        {persons
          .filter((person) => person.name.indexOf(filterValue) !== -1)
          .map((person) => (
            <Profile {...person} />
          ))}
      </ul>
    </>
  );
};

const Profile = (person) => {
  return (
    <>
      <li key={person.name}>
        Name:{person.name}
        <br />
        Age:{person.age}
        <br />
        Hobby:
        <ul>
          {person.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default Lesson64;
