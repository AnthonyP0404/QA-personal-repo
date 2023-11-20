import runPromise from './promises';
import { getResults, populateResults }  from './getResultsUtils';
import { registerEventListeners } from "./formUtils";

// runPromise();

getResults() // Fetch

// getResults() // AsyncAwait
//     .then(results =>  populateResults(results))
//     .catch(error => console.log(error.message));

registerEventListeners();

