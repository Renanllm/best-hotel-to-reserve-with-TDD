'use strict'

const chai = require('chai');
const expect = chai.expect;
const InputParser = require('../src/classes/input-parser');

describe('Input parser:', function () {
  it('should convert input:', function () {
    const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)';

    const { customerType, days } = InputParser.parse(input);

    expect(customerType.type).to.equals('Regular');
    expect(days).to.deep.equal([
      new Date('16Mar2020(mon)'), 
      new Date('17Mar2020(tues)'), 
      new Date('18Mar2020(wed)')
    ]);
  })
})