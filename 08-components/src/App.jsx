import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1>React Components</h1>
      <div className="conatainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
