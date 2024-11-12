import SortView from '../view/sort-view.js';
import TripsListView from '../view/trip-list-view.js';
import { render, RenderPosition } from '../framework/render.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils.js/common.js';

export default class BoardPresenter {
  #boardContainer;
  #pointsModel;

  #listOfTrips = new TripsListView();
  #sortComponent = new SortView();
  #noPointComponent = new NoPointView();

  #tripPoints = [];
  #pointPresenters = new Map();

  constructor({container, pointsModel}) {
    this.#boardContainer = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#renderBoard();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatePoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatePoint);
    this.#pointPresenters.get(updatePoint.id).init(updatePoint);
  };

  #renderSort() {
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
