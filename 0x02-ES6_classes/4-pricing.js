// eslint-disable-next-line
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // get code
  get amount() {
    return this._amount;
  }

  // set code
  set amount(value) {
    this._amount = value;
  }

  // get name
  get currency() {
    return this._currency;
  }

  // set name
  set currency(value) {
    this._currency = value;
  }

  // display full price method method
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // static method to return amount
  // multiplied by conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
