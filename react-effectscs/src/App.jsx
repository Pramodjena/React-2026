import React, { useEffect, useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("useEffect activated");

  //   document.title = count;
  // }, [count]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  const handleClick = () => {
    alert(name);
  };

  return (
    <div>
      {/* <h1>Side Effects in React</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> */}

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default App;
