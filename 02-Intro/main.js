// Your current import (tries to import default as 'age')
import age from "./import.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", getOutput);

function getOutput() {
  let curr_age = age(2001); // age refers to ageCalculate
  alert(`Your current age: ${curr_age}`);
  console.log(curr_age);
}

// window.getOutput = getOutput;
