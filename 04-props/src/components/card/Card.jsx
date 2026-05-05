import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://avatars.githubusercontent.com/u/103576706?v=4"
        alt="profile"
      />
      <h2>Name:{props.name} </h2>
      <h2>Follower: {props.follower}</h2>
      <button onClick={props.handleCount}>Follow</button>
    </div>
  );
};

export default Card;
