import React, { useState } from "react";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, desc) => {
    const newNote = {
      id: Date.now(),
      title,
      desc,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(updateNotes);
  };

  return (
    <div>
      <Header />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
