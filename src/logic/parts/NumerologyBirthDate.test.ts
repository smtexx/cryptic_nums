import NumerologyBirthDate from './NumerologyBirthDate';

const birthDate = new NumerologyBirthDate(4, 4, 1988);

describe('NumerologyBirthDate', () => {
  test('Method getNumberAmount returns correct value', () => {
    expect(birthDate.getNumberAmount(1)).toBe(1);
    expect(birthDate.getNumberAmount(4)).toBe(2);
    expect(birthDate.getNumberAmount(5)).toBe(0);
    expect(birthDate.getNumberAmount(0)).toBe(2);
  });
  test('Method getNumberAmount throws an error if argument is wrong', () => {
    expect(() => {
      birthDate.getNumberAmount(10);
    }).toThrow('Wrong argument value: 10');
    expect(() => {
      birthDate.getNumberAmount(-5);
    }).toThrow('Wrong argument value: -5');
  });

  test('Method getRulingNumber returns correct value', () => {
    let birthDate = new NumerologyBirthDate(8, 5, 1949);
    expect(birthDate.getRulingNumber()).toBe('9');
    birthDate = new NumerologyBirthDate(9, 5, 1949);
    expect(birthDate.getRulingNumber()).toBe('10');
    birthDate = new NumerologyBirthDate(1, 5, 1949);
    expect(birthDate.getRulingNumber()).toBe('11');
    birthDate = new NumerologyBirthDate(3, 5, 1940);
    expect(birthDate.getRulingNumber()).toBe('22/4');
  });

  test('Method getBirthDayNumber returns correct value', () => {
    let birthDate = new NumerologyBirthDate(9, 5, 1949);
    expect(birthDate.getBirthDayNumber()).toBe('9');
    birthDate = new NumerologyBirthDate(10, 5, 1949);
    expect(birthDate.getBirthDayNumber()).toBe('10');
    birthDate = new NumerologyBirthDate(19, 5, 1949);
    expect(birthDate.getBirthDayNumber()).toBe('10');
    birthDate = new NumerologyBirthDate(11, 5, 1949);
    expect(birthDate.getBirthDayNumber()).toBe('11');
    birthDate = new NumerologyBirthDate(22, 5, 1949);
    expect(birthDate.getBirthDayNumber()).toBe('22/4');
  });

  test('Method getIndividualYearNumber returns correct value', () => {
    let birthDate = new NumerologyBirthDate(27, 12, 1998);
    expect(birthDate.getIndividualYearNumber(1998)).toBe('3');
    expect(birthDate.getIndividualYearNumber(2002)).toBe('7');
    expect(birthDate.getIndividualYearNumber(2003)).toBe('8');
    expect(birthDate.getIndividualYearNumber(2004)).toBe('9');
    expect(birthDate.getIndividualYearNumber(2005)).toBe('1');
  });

  test('Method getIndividualYearNumber throws an error if argument is wrong', () => {
    let birthDate = new NumerologyBirthDate(27, 12, 1998);
    expect(() => {
      birthDate.getIndividualYearNumber(456);
    }).toThrow('Wrong year argument value: 456');
    expect(() => {
      birthDate.getIndividualYearNumber(2150);
    }).toThrow('Too big year argument value: 2150');
    expect(() => {
      birthDate.getIndividualYearNumber(1988);
    }).toThrow(
      'Year argument value 1988 less than subject birth year'
    );
  });
});
