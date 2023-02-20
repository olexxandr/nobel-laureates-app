import axios from 'axios';
import { SORT } from '../config/constants';
import * as logging from '../util/logging';
import { countries } from '../config/constants';
const filename = __filename.split('/').pop();

export type Laureate = {
  birth: {
    place: {
      countryNow: {
        en: string;
      };
    };
  };
};

export type LaureateCounter = {
  country: string;
  code?: string;
  counter: number;
};

export class Laureates {
  private laureates: Array<Laureate>;

  private readonly domain: any;

  private readonly path: string;

  private readonly countriesMap: Map<string, string>;

  /**
   * @constructor
   * @param laureates
   */
  constructor(laureates: Array<Laureate> = []) {
    this.laureates = laureates;
    this.countriesMap = new Map();
    this.domain = 'https://api.nobelprize.org';
    this.path = `/2.1/laureates`;
    countries.forEach((countryItem) => {
      this.countriesMap.set(countryItem.name, countryItem.code);
    });
  }

  /**
   *
   * @param url
   */
  // eslint-disable-next-line class-methods-use-this
  async getLaureatesPage(url: string): Promise<{ next: string; laureates: Array<Laureate> }> {
    const fnName = this.getLaureatesPage.name;

    const apiResponse = await axios.get(url, { timeout: 10000 });
    const { laureates, links } = apiResponse.data;
    const { next } = links;
    logging.logDebug('[%s::%s] fetched laureate number: %s', filename, fnName, laureates.length);
    return { next, laureates };
  }

  /**
   *
   */
  async fetchLaureates() {
    const fnName = this.fetchLaureates.name;

    let hasNext = true;
    let url = `${this.domain + this.path}?limit=150`;
    while (hasNext) {
      // eslint-disable-next-line no-await-in-loop
      const { laureates, next } = await this.getLaureatesPage(url);
      this.add(laureates);
      url = next;
      hasNext = url !== undefined && url !== '';
      logging.logDebug('[%s::%s] hasNext %s', filename, fnName, url);
    }
  }

  async getCounterByCountry(sort: string): Promise<Array<LaureateCounter>> {
    const counterByCountry = new Map<string, LaureateCounter>();
    // eslint-disable-next-line guard-for-in
    await this.fetchLaureates();
    this.laureates.forEach((laureate) => {
      const countryName = laureate?.birth?.place?.countryNow?.en;

      if (countryName) {
        const currentCounter: LaureateCounter | undefined = counterByCountry.get(countryName);
        if (currentCounter) {
          currentCounter.counter += 1;
        } else {
          counterByCountry.set(countryName, {
            country: countryName,
            code: this.countriesMap.get(countryName),
            counter: 1,
          });
        }
      }
    });
    if (sort === SORT.DESC) {
      return [...counterByCountry.values()].sort((a, b) => b.counter - a.counter);
    }
    return [...counterByCountry.values()].sort((a, b) => a.counter - b.counter);
  }

  /**
   *
   * @param {Array<Laureate>} laureates
   */
  add(laureates: Array<Laureate>) {
    this.laureates.push(...laureates);
  }
}
