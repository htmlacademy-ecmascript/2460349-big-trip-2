import SortView from '../view/sort-view.js';
import TripsListView from '../view/trip-list-view.js';
import { render, RenderPosition } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils.js/common.js';
import { SortType } from '../const.js';
import { sortPointByDay, sortPointByTime, sortPointByPrice } from '../utils.js/point.js';

export default class BoardPresenter {
  #boardContainer;
  #pointsModel;

  #listOfTrips = new TripsListView();
  #sortComponent = null;
  #noPointComponent = new NoPointView();

  #tripPoints = [];
  #pointPresenters = new Map();

  #currentSortType = SortType.DAY;
  #sourcedBoardPoints = [];

  constructor({container, pointsModel}) {
    this.#boardContainer = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#sourcedBoardPoints = [...this.#pointsModel.points];
    this.#sortPoints(this.#currentSortType);
    this.#renderBoard();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#sourcedBoardPoints = updateItem(this.#sourcedBoardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#tripPoints.sort(sortPointByDay);
        break;
      case SortType.TIME:
        this.#tripPoints.sort(sortPointByTime);
        break;
      case SortType.PRICE:
        this.#tripPoints.sort(sortPointByPrice);
        break;
    }
    this.#currentSortType = sortType;
  }


  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#boardContainer, RenderPosition.AFTERBEGIN);
  }

  #renderNoPoint() {
    render(this.#noPointComponent, this.#boardContainer);
  }

  #renderPointList() {
    render(this.#listOfTrips, this.#boardContainer);
    this.#renderPoints();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      listOfTrips: this.#listOfTrips.element,
      pointsModel: this.#pointsModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);

    }
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderBoard() {
    this.#renderPointList();

    if(this.#tripPoints.length === 0) {
      this.#renderNoPoint();
      return;
    }
    this.#renderSort();
  }
}
