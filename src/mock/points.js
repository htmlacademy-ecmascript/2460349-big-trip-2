import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 1100,
    dateFrom: '2024-08-20T22:55:56.845Z',
    dateTo: '2024-08-21T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa01',
      'f7d8c9e0-1112-1314-1516-920314253647'
    ],
    type: 'taxi'
  },

  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808v',
    basePrice: 1200,
    dateFrom: '2024-09-10T10:55:56.845Z',
    dateTo: '2024-09-11T12:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    isFavorite: false,
    offers: [
      'c3e4e6-9053-42ce-b747-e281314baa32',
      'be4c3e4e6-9053-42ce-b747-e281314baa3'
    ],
    type: 'Ship'
  },

  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808b',
    basePrice: 1300,
    dateFrom: '2019-07-10T11:55:56.845Z',
    dateTo: '2019-07-11T16:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    isFavorite: false,
    offers: [],
    type: 'Check-in'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
