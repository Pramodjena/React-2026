import React, { useState } from "react";

const NoteForm = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

 

  return (
    <div className="form-container">
      <input
        value={title}
        onChange={handleTitle}
        type="text"
        placeholder="Enter title"
      />

      <textarea
        value={desc}
        onChange={handleDesc}
        type="text"
        placeholder="Enter description"
      ></textarea>

      <button
        onClick={() => {
          addNote(title, desc); // function call
          setTitle("");
          setDesc("");
        }}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;
