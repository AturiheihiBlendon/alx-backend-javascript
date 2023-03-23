const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert');
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    const sinonStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const sinonSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // assert(sinonStub.calledWithExactly('SUM', 100, 20));
    // assert(sinonSpy.calledWithExactly('The total is: 10'));

    expect(sinonStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(sinonSpy.calledWithExactly('The total is: 10'));

    sinonStub.restore();
    sinonSpy.restore();
  });
});