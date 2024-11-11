const DATE_FORMAT = {
  MONTH_DAY: 'MMM D',
  HOURS: 'HH:mm',
  FULL_DATE_TIME: 'DD/MM/YYYY HH:mm',
  TIME: 'HH[H] mm[M]',
};

const POINT_COUNT = 4;

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

export {DATE_FORMAT, POINT_COUNT, FilterType, Mode, SortType};
