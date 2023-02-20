import { arrows } from '../data/arrows';
import { Arrows } from '../types';
import NumerologyBirthDate from './NumerologyBirthDate';

export default class NatalChart {
  private natalChart: number[];

  constructor(private birthDate: NumerologyBirthDate) {
    // Create natal chart
    this.natalChart = Array(9)
      .fill(0)
      .map((val, idx) => this.birthDate.getNumberAmount(idx + 1));
  }

  getMatches(): string[] {
    const matches: string[] = [];
    this.natalChart.forEach((val, idx) => {
      if (val > 0) {
        matches.push((idx + 1).toString().repeat(val));
      }
    });
    return matches;
  }

  getArrows(): Arrows[] {
    const findedArrows: Arrows[] = [];

    Object.entries(arrows).forEach(([arrowName, arrowConfig]) => {
      const code = arrowConfig.code
        .slice(0, 3)
        .split('')
        .map((val) => parseInt(val));
      const flag = arrowConfig.code.slice(-1);

      if (
        flag === '+' &&
        this.natalChart[code[0]] &&
        this.natalChart[code[1]] &&
        this.natalChart[code[2]]
      ) {
        findedArrows.push(arrowName as Arrows);
      }

      if (
        flag === '-' &&
        !this.natalChart[code[0]] &&
        !this.natalChart[code[1]] &&
        !this.natalChart[code[2]]
      ) {
        findedArrows.push(arrowName as Arrows);
      }
    });

    return findedArrows;
  }
}
