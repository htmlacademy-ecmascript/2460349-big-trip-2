
import {render} from '../render.js';
import FilterView from '../view/filter-view.js';

export default class HeaderPresenter {

  constructor({container}) {
    this.headerContainer = container;
  }

  init() {
    render(new FilterView(), this.headerContainer);
  }
}
