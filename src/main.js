import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonView from './view/new-point-button-view.js';
import { render } from './framework/render.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const newPointButtonComponent = new NewPointButtonView({onClick: handleNewPointButtonClick});

const boardPresenter = new BoardPresenter({container: siteMainElement, pointsModel, filterModel, onNewPointDestroy: handleNewPointFormClose});
const headerPresenter = new HeaderPresenter({container: siteHeaderElement, pointsModel, filterModel});

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}
function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

render(newPointButtonComponent, siteHeaderElement);

headerPresenter.init();
boardPresenter.init();

