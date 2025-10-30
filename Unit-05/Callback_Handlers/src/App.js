import StudentCard, { test } from "./components/StudentCard";
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [text, setText] = useState("Initial Value");

  const searchChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange} />
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text-2"></p>
      </div>
      <StudentCard name="Chamith1" age={test} homeTown="Colombo1" />
      <StudentCard name="Chamith2" age={35} homeTown="Colombo2" />
      <StudentCard name="Chamith3" age={45} homeTown="Colombo3" />
    </div>
  );
}

export default App;
