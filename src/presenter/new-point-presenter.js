import { remove, render, RenderPosition } from '../framework/render.js';
import EditTripPointView from '../view/edit-trip-point-view.js';
import { UserAction, UpdateType } from '../const.js';
import { getOffersByType } from '../utils/point.js';

export default class NewPointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;
  #pointEditComponent = null;
  #pointsModel = null;

  constructor({pointListContainer, pointsModel, onDataChange, onDestroy}) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#pointEditComponent !== null) {
      return;
    }
    this.#pointEditComponent = new EditTripPointView({
      point: {
        basePrice: 0,
        dateFrom: '',
        dateTo: '',
        destination: '',
        isFavorite: false,
        offers: [],
        type: 'flight'
      },
      offers: getOffersByType('flight', this.#pointsModel.offers),
      destination: {
        id: '',
        description: '',
        name: '',
        pictures: [],
      },
      allDestinations: this.#pointsModel.destinations,
      allOffers: this.#pointsModel.offers,
      onFormSubmit: this.#handleFormSubmit,
      onResetClick: this.#handleCancelClick,
    });

    render(this.#pointEditComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#pointEditComponent === null) {
      return;
    }
    this.#handleDestroy();
    remove(this.#pointEditComponent);
    this.#pointEditComponent = null;
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#pointEditComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };
    this.#pointEditComponent.shake(resetFormState);
  }

  #handleFormSubmit = (point) => {
    if(point.basePrice <= 0 ||
      point.basePrice > 100000 ||
      point.destination === '' ||
      point.dateTo === '' ||
      point.dateFrom === '' ||
      point.dateTo === point.dateFrom
    ){
      this.setAborting();
      return;
    }
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleCancelClick = () => {
    this.#handleDataChange(
      UserAction.CANCEL_NEW_POINT,
      UpdateType.MINOR,
    );
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
