import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  function increase() {
    // count + 1;
    // count++;
    setCount((prev) => prev + 1);
    console.log(count);
  }
  function decrease() {}
  function reset() {}

  return (
    <div>
      <h1>React State</h1>
      <h2>Count Value : {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default App;
