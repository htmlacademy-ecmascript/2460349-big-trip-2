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
  #offers = null;
  #destination = null;
  #destinations = null;

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
    this.#offers = this.#pointsModel.offers;
    this.#destinations = this.#pointsModel.destinations;
    this.#offer = getOffersByType(point.type, this.#offers) || {};
    this.#destination = getDestinationId(point.destination, this.#destinations) || {};

    this.#pointComponent = new TripPointView({
      point: point,
      offers: [...getOffersByTypeAndIds(point.type, point.offers, this.#offers)],
      destination: getDestinationId(point.destination, this.#destinations),
      onEditClick: () => {
        this.#replaceCardToForm();
        document.addEventListener('keydown', this.#escKeyDownHandler);
        document.addEventListener('keydown', this.#enterKeyDownHandler);
      },
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditTripPointView({
      point: this.#point,
      offers: getOffersByType(point.type, this.#offers) || {},
      destination: getDestinationId(point.destination, this.#destinations),
      allDestinations: this.#destinations,
      allOffers: this.#offers,
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

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }
    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#pointEditComponent.shake(resetFormState);
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
    if(point.basePrice === 0 || point.basePrice > 100000 || point.destination === '' || point.dateTo === '' || point.dateFrom === ''){
      this.setAborting();
      return;
    }
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      point,
    );
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
