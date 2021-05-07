'use strict'

const chai = require('chai');
const expect = chai.expect;
const Weekend = require('../src/classes/weekend');

describe('Weekend:', function () {
  describe('Testing invalid input:', function () {
    it('should not allow invalid day', function () {
      expect(() => {
        Weekend.isWeekendDay()
      }).to.throw('Invalid day!');
    })
  });

  describe('Testing a weekend day:', function () {
    it('should return true', function () {
      const { value } = { name: 'sun', value: 0 };

      expect(Weekend.isWeekendDay(value)).to.equals(true);
    })
  });

  
  describe('Testing a not weekend day:', function () {
    it('should return false', function () {
      const { value } = { name: 'mon', value: 1 };

      expect(Weekend.isWeekendDay(value)).to.equals(false);
    })
  });
});