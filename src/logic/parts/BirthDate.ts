import { getTwoDigitsString } from './helpers';

export default class BirthDate {
  readonly day: string;
  readonly month: string;
  readonly year: string;

  protected digitsArray: number[];

  constructor(day: number, month: number, year: number) {
    // Checking recieved values
    if (month > 12 || month < 1) {
      throw new BirthDateError(
        `Wrong month argument value: ${month}`
      );
    }
    if (year < 1000) {
      throw new BirthDateError(`Wrong year argument value: ${year}`);
    }
    if (new Date(year, month - 1, day).getTime() > Date.now()) {
      throw new BirthDateError('Used birth date from the feature');
    }

    const maxDaysInMonth = new Date(
      new Date(year, month, 1).getTime() - 43_200_000
    ).getDate();
    if (day > maxDaysInMonth || day < 1) {
      throw new BirthDateError(`Wrong day argument value: ${day}`);
    }

    // Create digitsArray
    this.digitsArray = [];

    const dayString = getTwoDigitsString(day);
    const monthString = getTwoDigitsString(month);
    const yearString = year.toString();

    this.digitsArray = `${dayString}${monthString}${yearString}`
      .split('')
      .map((valueString) => parseInt(valueString));

    // Save values
    this.day = dayString;
    this.month = monthString;
    this.year = yearString;
  }

  toString(): string {
    return `${this.day}.${this.month}.${this.year}`;
  }

  get dayNumber() {
    return parseInt(this.day);
  }
  get monthNumber() {
    return parseInt(this.month);
  }
  get yearNumber() {
    return parseInt(this.year);
  }
}

export class BirthDateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BirthDateError';
  }
}
