const DATE_FORMAT = {
  MONTH_DAY: 'MMM D',
  HOURS: 'HH:mm',
  FULL_DATE_TIME: 'DD/MM/YY HH:mm',
  TIME: 'HH[H] mm[M]',
};

const POINT_COUNT = 4;

const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SortType = {
  DAY: 'day',
  PRICE: 'price',
  TIME: 'time',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export {DATE_FORMAT, POINT_COUNT, POINT_TYPES, FilterType, Mode, SortType, UserAction, UpdateType};
