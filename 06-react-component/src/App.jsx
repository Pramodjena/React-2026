import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <>
      <h1>React Components</h1>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
