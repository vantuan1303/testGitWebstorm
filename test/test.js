var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
require('../StringExtend');


// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1,2,3].indexOf(4), -1);
//         });
//     });
// });

// describe('String', function () {
//     describe('reverse()', function () { //Mô tả phần cần
//         it ('reverse string "love"', function () {
//             expect("love".reverse()).to.equal("evol");
//         })
//     })
// });

// describe('String', function () {
//         expect("love".reverse()).to.equal("evol");
// })

describe("String", function () {
    describe("Cammel Case()", function () {
        it ('Cammel case string "i love you"', function () {
            expect("i love you".cammelCase()).to.equal("I Love You");
        })
    })
})