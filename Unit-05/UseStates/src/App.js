import StudentCard, { test } from "./components/StudentCard";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("From useState");
  let x = "From DOM";

  const handleChange = (event) => {
    //console.log(event.target.value);
    //const sampleText2 = document.getElementById("sample-text-2");
    // sampleText2.innerHTML = event.target.value;
    x = event.target.value;
    console.log(x);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange} />
      <div>
        <p id="sample-text">{text}</p>
        <p id="sample-text-2">{x}</p>
      </div>
      <StudentCard name="Chamith1" age={test} homeTown="Colombo1" />
      <StudentCard name="Chamith2" age={35} homeTown="Colombo2" />
      <StudentCard name="Chamith3" age={45} homeTown="Colombo3" />
    </div>
  );
}

export default App;
