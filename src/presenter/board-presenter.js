import EditTripPointView from '../view/trip-point-edit-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new TripListView();
  component = new TripPointView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripListComponent, this.boardContainer);
    render(new SortView(), this.tripListComponent.getElement());
    render(this.component, this.tripListComponent.getElement());
    render(new EditTripPointView(), this.component.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.component.getElement());
    }
  }
}
