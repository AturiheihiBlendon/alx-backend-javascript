// Task 0 test case
// import getResponseFromAPI from "./0-promise.js";

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);

// // Task 1 test case
// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

// Task2 test case
// import handleResponseFromAPI from "./2-then";

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);

// Task 3 test case

// import handleProfileSignup from "./3-all";

// handleProfileSignup();

// // Task 4 test case
// import signUpUser from "./4-user-promise";

// console.log(signUpUser("Bob", "Dylan"));

// Task 5 test case
// import uploadPhoto from './5-photo-reject';

// console.log(uploadPhoto('guillaume.jpg'));

// // Task 6 test case
// import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

// Task 7 test case
// import loadBalancer from "./7-load_balancer";

// const ukSuccess = 'Downloading from UK is faster';
// const frSuccess = 'Downloading from FR is faster';

// const promiseUK = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, ukSuccess);
// });

// const promiseUKSlow = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 400, ukSuccess);
// });

// const promiseFR = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 200, frSuccess);
// });

// const test = async () => {
//     console.log(await loadBalancer(promiseUK, promiseFR));
//     console.log(await loadBalancer(promiseUKSlow, promiseFR));
// }

// test();

// Task 8 test case

// import divideFunction from './8-try';

// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));

//  task 9 test case
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
