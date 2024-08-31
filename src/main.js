import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/point-model.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({container: siteMainElement, pointsModel});
const headerPresenter = new HeaderPresenter({container: siteHeaderElement});

headerPresenter.init();
boardPresenter.init();
