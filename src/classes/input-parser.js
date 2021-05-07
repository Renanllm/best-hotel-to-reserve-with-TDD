const CustomerType = require('./customer');

class InputParser {

  static parse(input) {
    if (!input) {
      throw new Error('Invalid input!');
    }

    const [type, daysInput] = input.split(':');
    const customerType = new CustomerType(type);

    const daysInputArray = daysInput.split(',');

    const days = daysInputArray.map((day) => new Date(day));

    return { customerType, days };
  }
  
}

module.exports = InputParser;