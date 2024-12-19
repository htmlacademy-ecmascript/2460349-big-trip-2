import { getRandomPoint } from '../mock/points.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';
import { POINT_COUNT } from '../const.js';

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #destinations = mockDestinations;
  #offers = mockOffers;

  get points() {
    return this.#points;
  }

  get destination() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

}
