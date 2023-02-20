import NumerologyBirthDate from './NumerologyBirthDate';
import NatalChart from './NatalChart';

describe('NatalChart', () => {
  test('Returns correct structure from getMatches method', () => {
    let birthDate = new NumerologyBirthDate(27, 5, 1983);
    let natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual([
      '1',
      '2',
      '3',
      '5',
      '7',
      '8',
      '9',
    ]);

    birthDate = new NumerologyBirthDate(4, 4, 1988);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual(['1', '44', '88', '9']);

    birthDate = new NumerologyBirthDate(11, 1, 1999);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getMatches()).toEqual(['1111', '999']);
  });

  test('Returns wright arrow for birth date', () => {
    let birthDate = new NumerologyBirthDate(31, 3, 1950);
    let natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual(['purposefulness']);

    birthDate = new NumerologyBirthDate(3, 4, 2002);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'procrastination',
      'passivity',
    ]);

    birthDate = new NumerologyBirthDate(6, 7, 1953);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'purposefulness',
      'spirituality',
      'intelligence',
    ]);

    birthDate = new NumerologyBirthDate(20, 2, 1981);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'research',
      'dissatisfaction',
    ]);

    birthDate = new NumerologyBirthDate(7, 3, 1960);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'intelligence',
      'hypersensitivity',
    ]);

    birthDate = new NumerologyBirthDate(15, 8, 2007);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'forgetfulness',
      'equilibrium',
    ]);

    birthDate = new NumerologyBirthDate(23, 4, 1987);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'practicality',
      'planning',
      'activity',
    ]);

    birthDate = new NumerologyBirthDate(2, 2, 2002);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'procrastination',
      'research',
      'forgetfulness',
      'chaos',
      'dissatisfaction',
      'passivity',
    ]);

    birthDate = new NumerologyBirthDate(26, 4, 1952);
    natalChart = new NatalChart(birthDate);
    expect(natalChart.getArrows()).toEqual([
      'purposefulness',
      'will',
    ]);
  });
});
