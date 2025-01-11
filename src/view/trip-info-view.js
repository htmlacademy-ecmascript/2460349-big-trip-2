import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate } from '../utils/point.js';
import { DateFormat } from '../const.js';

const tripInfoTemplate = (total, infoTitle, dates) => {
  const infoDatesMin = Math.min(...dates.map((date) => +new Date(date)));
  const infoDatesMax = Math.max(...dates.map((date) => +new Date(date)));
  const dateFormat = new Date(infoDatesMin).getMonth() === new Date(infoDatesMax).getMonth() ? DateFormat.DAY : DateFormat.DAY_MONTH;

  const path = (infoTitle.length < 4 ? (infoTitle || []) : [infoTitle.at(0), '...', infoTitle.at(-1)]).join('&nbsp;&mdash;&nbsp;');
  const tripDates = dates?.length ? [humanizeDate(infoDatesMin, dateFormat), humanizeDate(infoDatesMax, DateFormat.DAY_MONTH)].join('&nbsp;&mdash;&nbsp;') : '';

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${path}</h1>
      <p class="trip-info__dates">${tripDates}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
    </p>
  </section>`;
};

export default class TripInfoView extends AbstractView {
  #total = null;
  #infoTitle = null;
  #dates = null;

  constructor({total, infoTitle, dates}){
    super();
    this.#total = total;
    this.#infoTitle = infoTitle;
    this.#dates = dates;
  }

  get template() {
    return tripInfoTemplate(this.#total, this.#infoTitle, this.#dates);
  }
}

