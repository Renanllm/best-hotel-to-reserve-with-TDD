'use strict'

const chai = require('chai');
const expect = chai.expect;
const Recepcioninst = require('../src/classes/recepcionist');
const CustomerType = require('../src/classes/customer');

describe('Recepcioninst:', function () {
  it(`should return 'Parque das flores':`, function () {
    const customer = new CustomerType('Regular');
    const days = [
      new Date('16Mar2020(mon)'),
      new Date('17Mar2020(tues)'),
      new Date('18Mar2020(wed)')
    ];

    expect(Recepcioninst.verifyBestHotelToReserve(customer, days))
      .to.equals('Parque das flores');
  })
});