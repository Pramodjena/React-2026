import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <h2>No Notes Found</h2>;
  }

  return (
    <div className="notes-container">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          description={note.description}
          id={note.id}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
