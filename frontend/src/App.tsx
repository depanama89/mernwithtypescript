import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Note } from "./models/notes";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "GET",
      });
    }
  });
  const incrementer = () => {
    // setClickCount(clickCount + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button onClick={incrementer}>clicked {clickCount} times</Button> */}
      </header>
    </div>
  );
}

export default App;
