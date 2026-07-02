import React from "react";
import { useState } from "react";

const NoteForm = ({ addNote }) => {
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
        placeholder="Enter Title"
      />
      <textarea
        type="text"
        value={desc}
        onChange={handleDesc}
        placeholder="Enter description"
      ></textarea>
      <button
        onClick={() => {
          addNote(title, desc);
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
