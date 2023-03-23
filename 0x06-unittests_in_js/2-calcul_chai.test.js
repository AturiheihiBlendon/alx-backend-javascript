// const assert  = require('assert');
// Testing with chai
const calculateNumber = require('./2-calcul_chai.js');
var chai = require('chai');
var expect = chai.expect

describe('Test advanced calculateNumber()', function() {
    describe('Tests SUM ():', function(){
        it('returns 6', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6)
        })
    })

    describe('Tests SUBTRACT ():', function(){
        it('return -4', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
        })
    })

    describe('Tests DIVIVDE ():', function(){
        it('return 0.2', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
        })
    })

    describe('Tests DIVIVDE () with 0:', function(){
        it('return Error', function() {
            expect(calculateNumber('DIVIDE', 8.3, 0)).to.equal(Infinity)
        })
    })
})