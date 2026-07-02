import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  function increaseCount() {
    // count++;
    // console.log(count);
    setCount(count + 1);
  }

  return (
    <div>
      <Card count={count} increaseCount={increaseCount} />
    </div>
  );
};

export default App;
