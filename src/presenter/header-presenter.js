
import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';

export default class HeaderPresenter {
  #headerContainer = null;

  constructor({container}) {
    this.#headerContainer = container;
  }

  init() {
    render(new FilterView(), this.#headerContainer);
  }
}
