const InputParser = require("./input-parser");
const Recepcioninst = require("./recepcionist");

class Main {

  static exec(input) {
    if (!input) {
      throw new Error('Invalid input!');
    }

    const { customerType, days } = InputParser.parse(input);

    return Recepcioninst.verifyBestHotelToReserve(customerType, days);
  }

}

module.exports = Main;