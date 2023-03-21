const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let msg;
      const dataa = data.toString().split('\n');
      console.log(dataa);
      console.log('-------------------------');

      let students = dataa.filter((item) => item);

      students = students.map((item) => item.split(','));
      const STUDENTS = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${STUDENTS}`;
      console.log(msg);

      response.push(msg);
      const fields = {};
      for (const student in students) {
        if (student !== 0) {
          if (!fields[students[student][3]]) fields[students[student][3]] = [];
          fields[students[student][3]].push(students[student][0]);
        }
      }

      delete fields.field;

      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;

        console.log(msg);
        response.push(msg);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
