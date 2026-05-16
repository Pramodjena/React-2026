// import pramod from "./import.js";

import { ageCalculator, data } from "./import.js";
import Data from "./Data.jsx";

const btn = document.getElementById("btn");

btn.addEventListener("click", handleClick);

function handleClick() {
  let my_age = pramod(2001);
  alert(`My current age is: ${my_age}`);
}


