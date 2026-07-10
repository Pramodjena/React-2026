import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <h2>No Records Found !!!</h2>;
  }

  return (
    <div className="notes-container">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          desc={note.desc}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
