const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert');
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    const sinonSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    // assert(sinonSpy.calledWithExactly('SUM', 100, 20));
    expect(sinonSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    sinonSpy.restore();
  });
});