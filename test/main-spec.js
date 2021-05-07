'use strict'

const chai = require('chai');
const expect = chai.expect;
const Main = require('../src/classes/main');

describe('Main:', function () {
  describe('Test case 01:', function () {
    it(`should return 'Parque das flores':`, function () {
      const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)';

      expect(Main.exec(input)).to.equals('Parque das flores');
    })
  });

  describe('Test case 02:', function () {
    it(`should return 'Jardim Botânico':`, function () {
      const input = 'Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)';

      expect(Main.exec(input)).to.equals('Jardim Botânico');
    })
  });

  describe('Test case 03:', function () {
    it(`should return 'Mar Atlântico':`, function () {
      const input = 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)';

      expect(Main.exec(input)).to.equals('Mar Atlântico');
    })
  });

  describe('Test case 04 (without input):', function () {
    it('should not allow invalid input', function () {
      expect(() => {
        Main.exec()
      }).to.throw('Invalid input!');
    })
  });
});