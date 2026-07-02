import React from "react";
import "../App.css";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card-component">
      <h1>Card Component</h1>
      <img src="" alt="" />
      <h2>Followers: {props.count}</h2>
      <button onClick={props.increaseCount}>Follow</button>
    </div>
  );
};

export default Card;
