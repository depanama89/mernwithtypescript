import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Note as NoteModel } from "./models/notes";
import Note from "./components/Note";
// import { parse } from "path";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

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
      {notes.map((note) => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;
