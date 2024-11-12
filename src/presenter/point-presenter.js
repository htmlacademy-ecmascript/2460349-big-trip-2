import { render, replace, remove} from '../framework/render.js';
import TripPointView from '../view/trip-point-view.js';
import EditTripPointView from '../view/trip-point-edit-view.js';
import { Mode } from '../const.js';


export default class PointPresenter {
  #listOfTrips = null;
  #handleDataChange = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #pointsModel;
  #point = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({listOfTrips, pointsModel, onDataChange, onModeChange}) {
    this.#listOfTrips = listOfTrips;
    this.#pointsModel = pointsModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#point = point;


    this.#pointComponent = new TripPointView({
      point: point,
      offers: [...this.#pointsModel.getOffersByTypeAndIds(point.type, point.offers)],
      destination: this.#pointsModel.getDestinationId(point.destination),
      onEditClick: () => {
        this.#replaceCardToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      },
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditTripPointView({
      point: point,
      checkedOffers: [...this.#pointsModel.getOffersByTypeAndIds(point.type, point.offers)],
      offers: this.#pointsModel.getOfferByType(point.type),
      allDestinations: this.#pointsModel.getDestination(point.destination),
      destination: this.#pointsModel.getDestinationId(point.destination),
      onFormSubmit: () => {
        this.#replaceFormToCard();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    if(prevPointEditComponent === null || prevPointComponent === null) {
      render(this.#pointComponent, this.#listOfTrips);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#pointComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToCard();
    }
  }

  #replaceCardToForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#mode = Mode.DEFAULT;
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToCard();
  };

}
