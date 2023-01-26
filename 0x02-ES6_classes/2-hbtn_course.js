export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // get name
  get name() {
    return this._name;
  }

  // name setter
  set name(val) {
    if (typeof (val) !== 'string') {
      throw new TypeError('Name should be a string');
    }
    this._name = val;
  }

  // get length
  get length() {
    return this.length;
  }

  // length setter
  set length(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Length should be a number');
    }
    this._length = val;
  }

  // get students
  get students() {
    return this._students;
  }

  // students setter
  set students(val) {
    val.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('Students should be an array of strings');
      }
    });
    this._students = val;
  }
}
