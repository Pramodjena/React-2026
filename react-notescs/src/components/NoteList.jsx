import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <h2>No Notes Available</h2>;
  }

  return (
    <div className="notes-container">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          desc={note.desc}
          id={note.id}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
