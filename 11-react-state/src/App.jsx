import React, { useState } from "react";
import Count from "./components/Count";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  function increase() {
    setCount((prev) => prev + 1);
    console.log(count);
  }
  function decrease() {
    if (count === 0) {
      return;
    }
    setCount((prev) => prev - 1);
    console.log(count);
  }

  return (
    <div className="counter">
      <Count count={count} increase={increase} decrease={decrease} />
    </div>
  );
};

export default App;
