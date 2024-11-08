
import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import { generateFilter } from '../mock/filter.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #pointsModel;

  constructor({container, pointsModel}) {
    this.#headerContainer = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    const filters = generateFilter(this.#pointsModel.points);
    render(new FilterView({filters}), this.#headerContainer);
  }
}
