import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { DATE_FORMAT, POINT_TYPES } from '../const.js';
import { humanizeDate, getOffersByType, getDestinationByName } from '../utils.js/point.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const createOfferTemplate = (offer, checkedOffers) => {
  const {id, title, price} = offer;
  const isChecked = (checkedOffers?.includes(id));

  return `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="${id}" ${isChecked ? 'checked' : ''}>

     <label class="event__offer-label" for="${id}">
       <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
       <span class="event__offer-price">${price}</span>
     </label>
  </div>
  `;
};

const createListOfferTemplate = (offers, checkedOffers) => {
  if (offers === undefined) {
    return '';
  }

  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offers.map((offer) => createOfferTemplate(offer, checkedOffers)).join('')}
      </div>
    </section>
  `;
};


const createPhotoTemplate = ({src, description}) => `<img class="event__photo" src="${src}" alt="${description}"></img>`;


const createPhotosContainerTemplate = (pictures) => {
  if(pictures.length <= 0){
    return '';
  }

  return `
  <div class="event__photos-container">
    <div class="event__photos-tape">
       ${pictures.map((picture) => createPhotoTemplate(picture)).join('')}
    </div>
  </div>`;
};

const createDatalistOptionsTemplate = ({name}) => `<option value="${name}"></option>`;

function createPointTypeItem(pointId, pointType, currentPointType) {
  const isChecked = pointType === currentPointType ? 'checked' : '';
  const labelTitle = pointType[0].toUpperCase() + pointType.slice(1);
  return (
    `<div class="event__type-item">
      <input id="event-type-${pointType}-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${pointType} ${isChecked} }>
      <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-${pointId}">${labelTitle}</label>
    </div>`
  );
}

const editTripPointFormTemplete = (state, allDestinations) => {
  const { type, dateFrom, dateTo, basePrice, id } = state.point;
  const {offers} = state.offersForState;
  const checkedOffers = state.point.offers;
  const { name, description, pictures } = state.destinationForState;

  return `
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${POINT_TYPES.map((pointType) => createPointTypeItem(id, pointType, type)).join('')}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${name}" list="destination-list-${id}">
        <datalist id="destination-list-${id}">
        ${allDestinations.map((target) => createDatalistOptionsTemplate(target)).join('')}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${id}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${humanizeDate(dateFrom, DATE_FORMAT.FULL_DATE_TIME)}"
        &mdash;
        <label class="visually-hidden" for="event-end-time-${id}">—</label>
        <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${humanizeDate(dateTo, DATE_FORMAT.FULL_DATE_TIME)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${id}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
        ${createListOfferTemplate(offers, checkedOffers)}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
        ${createPhotosContainerTemplate(pictures)}
      </section>
    </section>
  </form>
`;
};

export default class EditTripPointView extends AbstractStatefulView {
  #allDestinations = null;
  #handleFormSubmit = null;
  #startDatepicker = null;
  #endDatepicker = null;

  constructor({point, offers, destination, allDestinations, onFormSubmit}) {
    super();
    this.#allDestinations = allDestinations;
    this._setState(EditTripPointView.parsePointToState({ point, offers, destination }));
    this.point = point;
    this.#handleFormSubmit = onFormSubmit;
    this._restoreHandlers();
  }

  _restoreHandlers() {
    this.element.addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCloseHandler);

    this.element.querySelectorAll('.event__offer-selector')
      .forEach((item) => item.addEventListener('change', this.#eventChangeHandler));

    this.element.querySelectorAll('.event__type-item input')
      .forEach((item) => item.addEventListener('change', this.#pointTypeChangeHandler));

    this.element.querySelector('.event__input--destination')
      .addEventListener('blur', this.#pointDestinationBlurHandler);

    this.#setDatepicker();

  }

  #pointTypeChangeHandler = (evt) => {
    evt.preventDefault();
    const updatedOffers = getOffersByType(evt.target.value)?.offers;
    this.updateElement({
      ...this._state,
      point: {...this._state.point, type: evt.target.value },
      offersForState: { type: evt.target.value, offers: updatedOffers },
    });
  };

  #eventChangeHandler = (evt) => {
    const offerId = evt.target.id;
    const isChecked = evt.target.checked;

    const updatedCheckedOffers = isChecked
      ? [...this._state.point.offers, offerId]
      : this._state.point.offers.filter((id) => id !== offerId);

    this.updateElement({
      ...this._state,
      point: {
        ...this._state.point,
        offers: updatedCheckedOffers,
      },
    });
  };

  #pointDestinationBlurHandler = (evt) => {
    evt.preventDefault();
    const updatedDestination = getDestinationByName(evt.target.value);
    this.updateElement({
      ...this._state,
      point: {...this._state.point, destination: updatedDestination.id },
      destinationForState: { ...updatedDestination },
    });
  };

  #startDateChangeHandler = ([userDate]) => {
    this.updateElement({
      ...this._state,
      point: {...this._state.point, dateFrom: userDate.toISOString() },
    });
    this.#endDatepicker.set('minDate', userDate);
  };

  #endDateChangeHandler = ([userDate]) => {
    this.updateElement({
      ...this._state,
      point: {...this._state.point, dateTo: userDate.toISOString() },
    });
    this.#startDatepicker.set('maxDate', userDate);
  };

  #setDatepicker() {
    this.#startDatepicker = flatpickr(
      this.element.querySelector('input[name=event-start-time]'),
      {
        minDate: new Date(),
        maxDate: this._state.point.dateTo ? new Date(this._state.point.dateTo) : null,
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.point.dateFrom,
        onChange: this.#startDateChangeHandler,
      }
    );
    this.#endDatepicker = flatpickr(
      this.element.querySelector('input[name=event-end-time]'),
      {
        minDate: this._state.point.dateFrom ? new Date(this._state.point.dateFrom) : new Date(),
        enableTime: true,
        dateFormat: 'd/m/y H:i',
        defaultDate: this._state.point.dateTo,
        onChange: this.#endDateChangeHandler,
      }
    );
  }

  static parsePointToState = ({point, offers, destination}) => ({
    point: { ...point },
    offersForState: { ...(offers || getOffersByType(point.type)) },
    destinationForState: { ...destination }
  });

  static parseStateToPoint = (state) => {
    const point = {...state};
    return point;
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditTripPointView.parseStateToPoint(this._state.point));
  };

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(EditTripPointView.parseStateToPoint(this.point));
  };


  get template() {
    return editTripPointFormTemplete(this._state, this.#allDestinations);
  }

  reset(point, offer, destination) {
    this.updateElement(
      EditTripPointView.parsePointToState({point, offer, destination}),
    );
  }

}
