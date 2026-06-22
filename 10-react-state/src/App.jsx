import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  // function increase() {
  //   console.log(count);
  // }

  const increase = () => {
    setCount((prev) => prev + 1);
    console.log(count++);
  };

  return (
    <div>
      <h1>React State</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Add</button>
    </div>
  );
};

export default App;
