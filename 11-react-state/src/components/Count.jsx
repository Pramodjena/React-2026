import React from "react";

const Count = (props) => {
  return (
    <div>
      <h1>React State</h1>
      <h2>Count No: {props.count}</h2>
      <button onClick={props.increase}>Increase</button>
      <button onClick={props.decrease}>Decrease</button>
    </div>
  );
};

export default Count;
