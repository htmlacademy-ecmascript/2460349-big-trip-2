import { render, replace, remove} from '../framework/render.js';
import TripPointView from '../view/trip-point-view.js';
import EditTripPointView from '../view/trip-point-edit-view.js';
import { Mode, UserAction, UpdateType } from '../const.js';
import { getDestinationId, getOffersByType, getOffersByTypeAndIds } from '../utils/point.js';


export default class PointPresenter {
  #boardComponent = null;
  #pointsModel = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;
  #offer = null;
  #destination = null;

  #mode = Mode.DEFAULT;

  constructor({boardComponent, pointsModel, onDataChange, onModeChange}) {
    this.#boardComponent = boardComponent;
    this.#pointsModel = pointsModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#point = point;
    this.#offer = getOffersByType(point.type) || {};
    this.#destination = getDestinationId(point.destination) || {};


    this.#pointComponent = new TripPointView({
      point: point,
      offers: [...getOffersByTypeAndIds(point.type, point.offers)],
      destination: getDestinationId(point.destination),
      onEditClick: () => {
        this.#replaceCardToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
        document.addEventListener('keydown', this.#enterKeyDownHandler);
      },
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditTripPointView({
      point: this.#point,
      offers: getOffersByType(point.type) || {},
      destination: getDestinationId(point.destination),
      allDestinations: this.#pointsModel.destination,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      onFormClose: this.#handleFormClose,
    });

    if(prevPointEditComponent === null || prevPointComponent === null) {
      render(this.#pointComponent, this.#boardComponent);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
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
      this.#pointEditComponent.reset(this.#point, this.#offer, this.#destination);
      this.#replaceFormToCard();
    }
  };

  #enterKeyDownHandler = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      evt.target.blur();
    }
  };

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#pointEditComponent.reset(this.#point, this.#offer, this.#destination);
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
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    document.removeEventListener('keydown', this.#enterKeyDownHandler);
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.PATCH,
      {...this.#point, isFavorite: !this.#point.isFavorite},
    );
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      point,
    );
    this.#replaceFormToCard();
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleFormClose = () => {
    this.#pointEditComponent.reset(this.#point, this.#offer, this.#destination);
    this.#replaceFormToCard();
  };

}
