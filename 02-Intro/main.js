import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

console.log("JS loaded");

const container = document.getElementById("root");
console.log("Root:", container);

function Hello() {
  return React.createElement("h1", null, "Hello World!");
}

createRoot(container).render(React.createElement(Hello));


//? Using JSX :

// function Hello() {
//   return (
//     <h1>Hello World!</h1>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Hello />
// );