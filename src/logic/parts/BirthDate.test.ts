import BirthDate from './BirthDate';

describe('BirthDate', () => {
  test('Creates BirthDates object', () => {
    const birthDate = new BirthDate(4, 5, 1988);
    expect(birthDate.toString()).toBe('04.05.1988');
  });

  test('Creates BirthDates object with leap year', () => {
    const birthDate = new BirthDate(29, 2, 2020);
    expect(birthDate.toString()).toBe('29.02.2020');
  });

  test('Throws an error if month is wrong', () => {
    expect(() => {
      new BirthDate(23, 14, 2022);
    }).toThrow('Wrong month argument value: 14');
    expect(() => {
      new BirthDate(23, 0, 2022);
    }).toThrow('Wrong month argument value: 0');
  });

  test('Throws an error if year is wrong', () => {
    expect(() => {
      new BirthDate(23, 10, 987);
    }).toThrow('Wrong year argument value: 987');
  });

  test('Throws an error if day is wrong', () => {
    expect(() => {
      new BirthDate(31, 11, 2022);
    }).toThrow('Wrong day argument value: 31');
    expect(() => {
      new BirthDate(29, 2, 2022);
    }).toThrow('Wrong day argument value: 29');
  });

  test('Throws an error if date is from feature', () => {
    expect(() => {
      new BirthDate(12, 11, 2024);
    }).toThrow('Used birth date from the feature');
  });

  test('Returns prop value in number type from getters', () => {
    const birthDate = new BirthDate(4, 5, 1997);
    expect(birthDate.dayNumber).toBe(4);
    expect(birthDate.monthNumber).toBe(5);
    expect(birthDate.yearNumber).toBe(1997);
  });
});
