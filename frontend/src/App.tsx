import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Note } from "./models/notes";
import { parse } from "path";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", {
          method: "GET",
        });
        const notes = await response.text();
        const data = notes ? JSON.parse(notes) : null;
        setNotes(data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  const incrementer = () => {
    // setClickCount(clickCount + 1);
  };
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(notes)}</header>
    </div>
  );
}

export default App;
