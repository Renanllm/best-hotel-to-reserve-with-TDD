'use strict'

const chai = require('chai');
const expect = chai.expect;
const Hotel = require('../src/classes/hotel');

describe('Hotel:', function () {
  it('should return weekValues', function () {
    const hotel = new Hotel(
      'nome hotel',
      4,
      300,
      200,
      500,
      600
    );

    expect(hotel.weekDayValues).to.deep.equal({
      regular: 300,
      loyalty: 200
    });
  })
})