const assert  = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test advanced calculateNumber()', function() {
    describe('Tests SUM ():', function(){
        it('returns 6', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
        })
    })

    describe('Tests SUBTRACT ():', function(){
        it('return -4', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
        })
    })

    describe('Tests DIVIVDE ():', function(){
        it('return 0.2', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
        })
    })

    describe('Tests DIVIVDE () with 0:', function(){
        it('return Error', function() {
            // assert(calculateNumber('DIVIDE', 1.4, 0), 'Error')
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
        })
    })

    describe("Tests invalid operator type", function(){
        it('return invalid operator message', function(){
            assert.throws(() => calculateNumber(INVALID, 5.7, 4.6), {
                message:
                'INVALID is not defined'});
        })
    })
})