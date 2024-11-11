import dayjs from 'dayjs';

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

const durationOfTrip = (timeA, timeB) => {
  const durationInMinutes = dayjs(timeB).diff(dayjs(timeA), 'minute');
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
};

const sortPointByDay = (pointA, pointB) => new Date(pointA.dateFrom) - new Date(pointB.dateFrom);
const sortPointByTime = (pointA, pointB) => (new Date(pointB.dateTo) - new Date(pointB.dateFrom)) - (new Date(pointA.dateTo) - new Date(pointA.dateFrom));
const sortPointByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

export {humanizeDate, durationOfTrip, sortPointByDay, sortPointByTime, sortPointByPrice};
