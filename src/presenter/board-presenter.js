import EditTripPointView from '../view/trip-point-edit-view.js';
import SortView from '../view/sort-view.js';
import TripsListView from '../view/trip-list-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #boardContainer;
  #pointsModel;

  #listOfTrips = new TripsListView();

  #tripPoints = [];

  constructor({container, pointsModel}) {
    this.#boardContainer = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    render(new SortView(), this.#boardContainer);
    render(this.#listOfTrips, this.#boardContainer);


    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);

    }
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new TripPointView({
      point: point,
      offers: [...this.#pointsModel.getOffersByTypeAndIds(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationId(point.destination),
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new EditTripPointView({
      point: point,
      checkedOffers: [...this.#pointsModel.getOffersByTypeAndIds(point.type, point.offers)],
      offers: this.#pointsModel.getOfferByType(point.type),
      allDestinations: this.#pointsModel.getDestination(point.destination),
      destination: this.#pointsModel.getDestinationId(point.destination),
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }
    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#listOfTrips.element);
  }
}
