interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: 'Aturiheihi',
    lastname: 'Blendon',
    age: 23,
    location: 'Kira',
};

const student2: Student = {
    firstname: 'Nasa',
    lastname: 'Kawesa',
    age: 27,
    location: 'Mulawa',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');

  cellName.textContent = student.firstname;
  cellLocation.textContent = student.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
