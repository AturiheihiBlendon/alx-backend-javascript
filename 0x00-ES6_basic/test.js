// Task 0 test case
// import { taskFirst, taskNext } from './0-constants.js';

// console.log(`${taskFirst()} ${taskNext()}`);

// Task 1 test Case

// import taskBlock from './1-block-scoped.js';

// console.log(taskBlock(true));
// console.log(taskBlock(false));

// Task 2 test case

// import getNeighborhoodsList from './2-arrow.js';

// const neighborhoodsList = new getNeighborhoodsList();
// const res = neighborhoodsList.addNeighborhood('Noe Valley');
// console.log(res);

// Task 3 test case
// import getSumOfHoods from './3-default-parameter.js';

// console.log(getSumOfHoods(34));
// console.log(getSumOfHoods(34, 3));
// console.log(getSumOfHoods(34, 3, 4));

// task 4 test case

// import returnHowManyArguments from './4-rest-parameter.js';

// console.log(returnHowManyArguments("one"));
// console.log(returnHowManyArguments("one", "two", 3, "4th"));

// Task  5 test case
// import concatArrays from './5-spread-operator.js';

// console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

// task 6 test case
// import getSanFranciscoDescription from './6-string-interpolation.js';

// console.log(getSanFranciscoDescription());

// Task 7 test case
// import getBudgetObject from './7-getBudgetObject.js';

// console.log(getBudgetObject(400, 700, 900));

// Task 8ntest case
// import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

// console.log(getBudgetForCurrentYear(2100, 5200, 1090));

// Task 9 testcase
// import getFullBudgetObject from './9-getFullBudget.js';

// const fullBudget = getFullBudgetObject(20, 50, 10);

// console.log(fullBudget.getIncomeInDollars(fullBudget.income));
// console.log(fullBudget.getIncomeInEuros(fullBudget.income));

// Task 10 test case
// import appendToEachArrayValue from './10-loops.js';

// console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

// Task 11 test case
// import createEmployeesObject from './11-createEmployeesObject.js';

// console.log(createEmployeesObject('Software', ['Bob', 'Sylvie']));

// Task 12 test case
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
