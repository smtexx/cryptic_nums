import { Peak } from '../types/Peak';
import { calculateFlatSum, calculateTopPeakValue } from './helpers';
import NumerologyBirthDate from './NumerologyBirthDate';

export default class Pyramid {
  readonly peaks: Peak[];

  constructor(private birthDate: NumerologyBirthDate) {
    const base = [birthDate.month, birthDate.day, birthDate.year].map(
      (val) => parseInt(calculateFlatSum(val))
    );

    const baseAge = 36 - parseInt(birthDate.getRulingNumber());

    // First peak
    const firstPeak: Record<keyof Peak, number> = {
      value: parseInt(
        calculateFlatSum((base[0] + base[1]).toString())
      ),
      age: baseAge,
      year: birthDate.yearNumber + baseAge,
    };

    // Second peak
    const secondPeak: Record<keyof Peak, number> = {
      value: parseInt(
        calculateFlatSum((base[1] + base[2]).toString())
      ),
      age: firstPeak.age + 9,
      year: firstPeak.year + 9,
    };

    // Third peak
    const thirdPeak: Record<keyof Peak, number> = {
      value: calculateTopPeakValue(firstPeak.value, secondPeak.value),
      age: secondPeak.age + 9,
      year: secondPeak.year + 9,
    };

    const fourthPeak: Record<keyof Peak, number> = {
      value: calculateTopPeakValue(base[0], base[2]),
      age: thirdPeak.age + 9,
      year: thirdPeak.year + 9,
    };

    this.peaks = [firstPeak, secondPeak, thirdPeak, fourthPeak].map(
      (peak) => ({
        value: peak.value.toString(),
        age: peak.age.toString(),
        year: peak.year.toString(),
      })
    );
  }
}
