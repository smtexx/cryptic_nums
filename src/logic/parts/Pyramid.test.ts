import NumerologyBirthDate from './NumerologyBirthDate';
import Pyramid from './Pyramid';

describe('Pyramid', () => {
  test('Creates correct Peak structures', () => {
    const birthDate = new NumerologyBirthDate(21, 4, 1926);
    const pyramid = new Pyramid(birthDate);
    expect(pyramid.peaks).toEqual([
      {
        value: '7',
        age: '29',
        year: '1955',
      },
      {
        value: '3',
        age: '38',
        year: '1964',
      },
      {
        value: '10',
        age: '47',
        year: '1973',
      },
      {
        value: '4',
        age: '56',
        year: '1982',
      },
    ]);
  });

  const birthDate = new NumerologyBirthDate(10, 6, 1921);
  const pyramid = new Pyramid(birthDate);
  expect(pyramid.peaks).toEqual([
    {
      value: '7',
      age: '34',
      year: '1955',
    },
    {
      value: '5',
      age: '43',
      year: '1964',
    },
    {
      value: '3',
      age: '52',
      year: '1973',
    },
    {
      value: '10',
      age: '61',
      year: '1982',
    },
  ]);
});
