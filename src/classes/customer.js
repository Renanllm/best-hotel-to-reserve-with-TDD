class CustomerType {

  constructor(type) {
    if (type !== 'Regular' && type !== 'Fidelidade') {
      throw new Error('CustomerType invalid!');
    }

    this.type = type;
  }

}

module.exports = CustomerType;