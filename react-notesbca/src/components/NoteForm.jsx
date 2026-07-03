import React, { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

  const handleClick = () => {
    alert(`The values are: ${title}, ${desc}`);
  };

  return (
    <div>
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

      <button onClick={handleClick}>Add Note</button>
    </div>
  );
};

export default NoteForm;
