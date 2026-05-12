import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="profile" />

      <h2>Name: {props.name}</h2>
      <h2>Follower: {props.follower}</h2>

      <button onClick={props.onClick}>Follow</button>
    </div>
  );
};

export default Card;
