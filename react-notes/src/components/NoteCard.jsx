function NoteCard({
  id,

  title,

  description,

  deleteNote,
}) {
  return (
    <div className="note-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <button
        onClick={() => {
          deleteNote(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;
