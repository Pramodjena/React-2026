import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function App() {
  const [showA, setShowA] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Cleanup Function Demo</h1>

      <button onClick={() => setShowA(!showA)}>
        Switch Component
      </button>

      <hr />

      {showA ? <ComponentA /> : <ComponentB />}
    </div>
  );
}