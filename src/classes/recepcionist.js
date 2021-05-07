const hotels = require('../data/hotels');
const Weekend = require('./weekend');

class Recepcioninst {

  static verifyBestHotelToReserve(customer, days) {
    let bestHotel = { name: hotels[0].name, total: 0, rating: 0 };

    hotels.forEach(hotel => {
      const total = days.reduce((total, day) => {
        const dayValue =
          verifyDayValueByCustomerType(day.getDay(), customer, hotel);

        return total + dayValue;
      }, 0);

      if (bestHotel.total === 0) {
        bestHotel = setBestHotel(hotel, total);
      }

      if (total < bestHotel.total) {
        bestHotel = setBestHotel(hotel, total);
      } else if (total === bestHotel.total && hotel.rating > bestHotel.rating) {
        bestHotel = setBestHotel(hotel, total);
      }
    });

    return bestHotel.name;
  }

}

function verifyDayValueByCustomerType(day, { type }, { weekDayValues, weekeendDayValues }) {
  if (Weekend.isWeekendDay(day)) {
    return type === 'Regular' ?
      weekeendDayValues.regular : weekeendDayValues.loyalty;
  }

  return type === 'Regular' ?
    weekDayValues.regular : weekDayValues.loyalty;
}

function setBestHotel(hotel, total) {
  return { name: hotel.name, total, rating: hotel.rating };
}

module.exports = Recepcioninst;