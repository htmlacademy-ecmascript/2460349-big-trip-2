import { render, replace, remove, RenderPosition } from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { filter } from '../utils/filter.js';
import { FilterType, UpdateType } from '../const.js';
import { getOfferPrice, getDestinationName } from '../utils/point.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #filterModel = null;
  #pointsModel = null;
  #filterComponent = null;
  #tripInfoComponent = null;

  constructor({container, filterModel, pointsModel}) {
    this.#headerContainer = container;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;
    return Object.values(FilterType).map((type) => ({
      type,
      count: filter[type](points).length
    }));
  }

  get total() {
    const points = this.#pointsModel.points;
    const offers = this.#pointsModel.offers;
    const checkedOffers = points.map((point) => point.offers).flat();
    const allOffers = offers.map((offer) => offer.offers).flat();
    const offersPrices = (checkedOffers.map((checkedOffer) => getOfferPrice(checkedOffer, allOffers)));
    const offersPrice = offersPrices.length === 0 ? 0 : offersPrices.reduce((result, num) => result + num);
    const pointsPrices = points.map((point)=> point.basePrice);
    const pointsPrice = pointsPrices.length === 0 ? 0 : pointsPrices.reduce((result, num) => result + num);
    return pointsPrice + offersPrice;
  }

  get infoTitle() {
    const points = this.#pointsModel.points;
    const destinations = this.#pointsModel.destinations;
    const pointDestinations = points.map((point) => point.destination);
    const destinationInfo = (pointDestinations.map((pointDestination) => getDestinationName(pointDestination, destinations)));
    return destinationInfo.length === 0 ? '' : destinationInfo;
  }

  get dates() {
    const points = this.#pointsModel.points;
    const allDates = points.flatMap((point)=> [point.dateFrom, point.dateTo]);
    return allDates;
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;
    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });
    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#headerContainer);
      return;
    }
    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);

    const total = this.total;
    const infoTitle = this.infoTitle;
    const dates = this.dates;
    const prevTripInfoComponent = this.#tripInfoComponent;
    this.#tripInfoComponent = new TripInfoView({
      total,
      infoTitle,
      dates,
    });
    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
      return;
    }
    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }
    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
