import EditTripPointView from '../view/trip-point-edit-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new TripListView();

  constructor({container}) {
    this.boardContainer = container;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);
    render(new EditTripPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.tripListComponent.getElement());
    }
  }
}
