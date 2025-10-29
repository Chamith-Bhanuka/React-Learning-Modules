import StudentCard, { test } from "./components/StudentCard";
import React from "react";
import "./App.css";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange} />
      <StudentCard name="Chamith1" age={test} homeTown="Colombo1" />
      <StudentCard name="Chamith2" age={35} homeTown="Colombo2" />
      <StudentCard name="Chamith3" age={45} homeTown="Colombo3" />
    </div>
  );
}

export default App;
