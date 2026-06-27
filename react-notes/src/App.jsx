import { useState } from "react";

import Header from "./components/Header";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),

      title,

      description,
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(updatedNotes);
  };

  return (
    <>
      <Header />

      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;
