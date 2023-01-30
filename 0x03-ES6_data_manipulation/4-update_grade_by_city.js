export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((student) => student.location === city)
    .map((students) => {
      const newList = { ...students };
      const newStdnt = newGrades.find((student) => student.studentId === students.id);
      if (newStdnt) {
        newList.grade = newStdnt.grade;
      } else {
        newList.grade = 'N/A';
      }
      return newList;
    });
}
