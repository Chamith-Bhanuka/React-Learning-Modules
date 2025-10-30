import StudentCard from "./components/StudentCard";
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [text, setText] = useState("");

  const searchChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const studentList = [
    { name: "Amal", age: 20, homeTown: "Kandy" },
    { name: "Kamal", age: 25, homeTown: "Colombo" },
    { name: "Nimal", age: 15, homeTown: "Jaffna" },
  ];

  const searchedStudents = studentList.filter((student) =>
    student.name.toLowerCase().includes(text.toLowerCase()),
  );

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange} />
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text-2"></p>
      </div>

      {searchedStudents.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.homeTown}
        />
      ))}
    </div>
  );
}

export default App;
