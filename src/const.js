const DateFormat = {
  MONTH_DAY: 'MMM D',
  HOURS: 'HH:mm',
  FULL_DATE_TIME: 'DD/MM/YY HH:mm',
  TIME: 'HH[H] mm[M]',
  DAY_MONTH: 'D MMM',
  DAY: 'D',
};

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
  CANCEL_NEW_POINT: 'CANCEL_NEW_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export { DateFormat, FilterType, Mode, SortType, UserAction, UpdateType, TimeLimit };
