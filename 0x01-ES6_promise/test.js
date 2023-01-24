// Task 0 test case
// import getResponseFromAPI from "./0-promise.js";

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);

// // Task 1 test case
// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

// Task2 test case
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
