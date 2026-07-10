import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(30);

  useEffect(() => {
    console.log(count);
    document.title = count;
  }, [count]);

  return (
    <div>
      <h1>Side effects in React</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default App;
