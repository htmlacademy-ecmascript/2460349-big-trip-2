import { createElement } from '../render.js';

const createTripsListTemplete = () => '<ul class="trip-events__list"></ul>';

export default class TripsListView {
  getTemplate() {
    return createTripsListTemplete();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
