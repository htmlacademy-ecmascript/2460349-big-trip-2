import AbstractView from '../framework/view/abstract-view';
import {FilterType} from '../const.js';

const noPointTextValue = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

const createNoPointTemplate = (filterType) =>`<p class="trip-events__msg">${noPointTextValue[filterType]}</p>`;

export default class NoPointView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoPointTemplate(this.#filterType);
  }
}
