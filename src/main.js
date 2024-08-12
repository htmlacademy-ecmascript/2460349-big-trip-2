import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const boardPresenter = new BoardPresenter({container: siteMainElement});
const headerPresenter = new HeaderPresenter({container: siteHeaderElement});

headerPresenter.init();
boardPresenter.init();
