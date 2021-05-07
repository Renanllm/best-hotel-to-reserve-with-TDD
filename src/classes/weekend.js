const weekendDays = [
  { name: 'sun', value: 0 },
  { name: 'fri', value: 5 },
  { name: 'sat', value: 6 },
];

class Weekend {

  static isWeekendDay(dayValue) {
    if (!dayValue && dayValue !== 0) {
      throw new Error('Invalid day!');
    }

    return weekendDays
      .some(weekendDay => weekendDay.value === dayValue);
  }

}

module.exports = Weekend;