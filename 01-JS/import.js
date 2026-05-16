// Import and export are ES6+ module features that let you share code between JavaScript files.

// Import : It gets imported from other modules.
// Export : It gets exported for other modules.

// Two types :
// 1. default import/export
// 2. named import/export

// Default :
//1. one value per one file
//2. any name you can give while importing
//3. no {} needed
//4. ex: export default greet;
//5. ex: import any from "./filename.js";
// Named :
//1. Multiple values per one file
//2. exact name while importing
//3. needed {}
//4. ex: export {greet,hello};
//5. ex: import {greet,hello} from "./filename.js";

// export default function ageCalculator(b_year) {
//   return 2026 - b_year;
//   let curr_year = new Date().getFullYear();
//   return curr_year - b_year;
// }

export function ageCalculator(b_year) {
  //   return 2026 - b_year;
  let curr_year = new Date().getFullYear();
  return curr_year - b_year;
}

export const data = "ITMB";

