'use strict'

const chai = require('chai');
const expect = chai.expect;
const CustomerType = require('../src/classes/customer');

describe('Customer:', function () {
  it('should not allow invalid CustomerType', function () {
    expect(() => {
      new CustomerType('Marcelo')
    }).to.throw('CustomerType invalid!');
  })
})