import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  return (
    <div className="form-container">
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        placeholder="Enter title"
      />

      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        placeholder="Enter description"
      />

      <button
        onClick={() => {
          addNote(title, description);

          setTitle("");

          setDescription("");
        }}
      >
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;
