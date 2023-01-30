// Task 0 test case
// import getListStudents from "./0-get_list_students.js";

// console.log(getListStudents());

// Task 1 test case
// import getListStudentIds from "./1-get_list_student_ids.js";
// import getListStudents from "./0-get_list_students.js";

// console.log(getListStudentIds("hello"));
// console.log(getListStudentIds(getListStudents()));

// Task 2 test case
// import getListStudents from "./0-get_list_students.js";
// import getStudentsByLocation from "./2-get_students_by_loc.js";

// const students = getListStudents();

// console.log(getStudentsByLocation(students, 'San Francisco'));

// Task 3 test case
// import getListStudents from "./0-get_list_students.js";
// import getStudentIdsSum from "./3-get_ids_sum.js";

// const students = getListStudents();
// const value = getStudentIdsSum(students);

// console.log(value);

// Task 4 test case
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
