import BirthDate from './BirthDate';
import { calculateFlatSum, calculateSum } from './helpers';

export default class NumerologyBirthDate extends BirthDate {
  getNumberAmount(numberValue: number): number {
    if (numberValue < 0 || numberValue > 9) {
      throw new NumerologyError(
        `Wrong argument value: ${numberValue}`
      );
    }

    return this.digitsArray.filter((digit) => digit === numberValue)
      .length;
  }

  getRulingNumber(): string {
    return calculateSum(this.digitsArray.join(''));
  }

  getBirthDayNumber(): string {
    return calculateSum(this.day);
  }

  getIndividualYearNumber(year: number): string {
    // Checking argument
    if (year < 1000) {
      throw new NumerologyError(`Wrong year argument value: ${year}`);
    }
    if (year > this.yearNumber + 120) {
      throw new NumerologyError(
        `Too big year argument value: ${year}`
      );
    }
    if (year < this.yearNumber) {
      throw new NumerologyError(
        `Year argument value ${year} less than subject birth year`
      );
    }

    return calculateFlatSum(
      `${this.digitsArray.slice(0, 4).join('')}${year.toString()}`
    );
  }
}

class NumerologyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NumerologyError';
  }
}
