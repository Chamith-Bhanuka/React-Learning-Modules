import StudentCard, { test } from "./components/StudentCard";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <StudentCard name="Chamith1" age={test} homeTown="Colombo1" />
      <StudentCard name="Chamith2" age={35} homeTown="Colombo2" />
      <StudentCard name="Chamith3" age={45} homeTown="Colombo3" />
      <StudentCard name="Chamith4" age={55} homeTown="Colombo4" />
      <StudentCard name="Chamith5" age={65} homeTown="Colombo5" />
    </div>
  );
}

export default App;
