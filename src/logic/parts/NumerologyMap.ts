import { Arrows, Peak } from '../types';
import NatalChart from './NatalChart';
import NumerologyBirthDate from './NumerologyBirthDate';
import Pyramid from './Pyramid';

export default class NumerologyMap {
  readonly rulingNumber: string;
  readonly birthDayNumber: string;
  readonly individualYearNumber: string;

  readonly natalChart: {
    matches: string[];
    arrows: Arrows[];
  };

  readonly pyramid: Peak[];

  constructor(day: number, month: number, year: number) {
    const birthDate = new NumerologyBirthDate(day, month, year);
    const natalChart = new NatalChart(birthDate);
    const pyramid = new Pyramid(birthDate);

    this.rulingNumber = birthDate.getRulingNumber();
    this.birthDayNumber = birthDate.getBirthDayNumber();
    this.individualYearNumber = birthDate.getIndividualYearNumber(
      new Date().getFullYear()
    );

    this.natalChart = {
      matches: natalChart.getMatches(),
      arrows: natalChart.getArrows(),
    };

    this.pyramid = pyramid.peaks;
  }
}
