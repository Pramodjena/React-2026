import { useState } from "react";

// SearchBar receives a function via props (onSearch) — it doesn't know
// or care what happens with the city name, it just reports it upward.
function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city... e.g. Mumbai"
        aria-label="City name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
