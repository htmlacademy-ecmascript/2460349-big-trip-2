import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const boardPresenter = new BoardPresenter({container: siteMainElement, pointsModel, filterModel});
const headerPresenter = new HeaderPresenter({container: siteHeaderElement, pointsModel, filterModel});

headerPresenter.init();
boardPresenter.init();
