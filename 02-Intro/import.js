// Import and export are ES6 module features that let you share code between JavaScript files.

  // import : it gets imported from other modules.
  // export : it gets exported to other modules.

// Two types : 
            // 1. default 
                   //1. one value per file
                   //2. any name on import 
                   //3. no {} needed
                   //ex: export default greet;
                   //ex: import any from './utils.js';
            // 2. named 
                   //1. multiple values 
                   //2. exact name of each values 
                   //3. wrap within {}
                   //ex: import { greet, farewell } from './utils.js';
                   //ex: export {greet, farewell};


export default function ageCalculate(b_year) {
  return (2026 - b_year);
}

// export  function ageCalculate(b_year){
//        return (2026 - b_year);
// }
