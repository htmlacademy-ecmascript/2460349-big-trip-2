import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonView from './view/new-point-button-view.js';
import PointsApiService from './points-api-service.js';
import DestinationsApiService from './destinatoins-api-service.js';
import OffersApiService from './offers-api-service.js';
import { render } from './framework/render.js';

const AUTHORIZATION = 'Basic hS4sfS45wcl1sa2j';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION),
  destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION),
  offersApiService: new OffersApiService(END_POINT, AUTHORIZATION),
});

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

headerPresenter.init();
boardPresenter.init();


pointsModel.init()
  .then(() => {
    if (!pointsModel.isError) {
      render(newPointButtonComponent, siteHeaderElement);
    }
  });

// pointsModel.init()
//   .catch(()=>{})
//   .finally(() => {
//     render(newPointButtonComponent, siteHeaderElement);
//   });

