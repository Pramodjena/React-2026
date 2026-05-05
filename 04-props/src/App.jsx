import React from "react";
import Card from "./components/card/Card";

const App = () => {
  function handleCount() {
    alert("You click follower");
  }
  return (
    <div className="container">
      <Card name="Pramod" follower={3500} onClick={handleCount} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> 
    </div>
  );
};

export default App;
