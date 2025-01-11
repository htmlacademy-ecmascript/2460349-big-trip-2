import { FilterType } from '../const';

const currentDate = new Date();

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => new Date(point.dateFrom) > currentDate),
  [FilterType.PRESENT]: (points) => points.filter((point) => currentDate >= new Date(point.dateFrom) && currentDate <= new Date(point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => new Date(point.dateTo) < currentDate),
};

export { filter };
