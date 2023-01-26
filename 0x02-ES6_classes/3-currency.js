export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get code
  get code() {
    return this._code;
  }

  // set code
  set code(value) {
    this._code = value;
  }

  // get name
  get name() {
    return this._name;
  }

  // set name
  set name(value) {
    this._name = value;
  }

  // display fullcurrecncy method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
