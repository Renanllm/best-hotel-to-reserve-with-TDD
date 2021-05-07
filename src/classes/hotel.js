class Hotel {

  constructor(
    name,
    rating,
    weekDayRegularValue,
    weekDayLoyaltyValue,
    weekendDayRegularValue,
    weekendDayLoyaltyValue
  ) {
    // TODO: verificar se os dados estão vindo corretamente
    this.name = name;
    this.rating = rating;
    this.weekDayRegularValue = weekDayRegularValue;
    this.weekDayLoyaltyValue = weekDayLoyaltyValue;
    this.weekendDayRegularValue = weekendDayRegularValue;
    this.weekendDayLoyaltyValue = weekendDayLoyaltyValue;
  }

  get weekDayValues() {
    return {
      regular: this.weekDayRegularValue,
      loyalty: this.weekDayLoyaltyValue
    }
  }

  get weekeendDayValues() {
    return {
      regular: this.weekendDayRegularValue,
      loyalty: this.weekendDayLoyaltyValue
    }
  }

}

module.exports = Hotel;