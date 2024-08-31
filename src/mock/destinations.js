const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    description: '',
    name: 'Chamonix',
    pictures: [
      {
        src: `img/photos/${(Math.floor(Math.random() * 4)) + 1}.jpg`,
        description: 'Chamonix parliament building'
      },
      {
        src: `img/photos/${(Math.floor(Math.random() * 4)) + 1}.jpg`,
        description: 'Chamonix '
      }
    ]
  },

  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    description: '	Luxembourg, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Luxembourg',
    pictures: [
      {
        src: `img/photos/${(Math.floor(Math.random() * 4)) + 1}.jpg`,
        description: 'Luxembourg '
      },
      {
        src: `img/photos/${(Math.floor(Math.random() * 4)) + 1}.jpg`,
        description: 'Luxembourg parliament '
      },
      {
        src: `img/photos/${(Math.floor(Math.random() * 4)) + 1}.jpg`,
        description: 'Luxembourg parliament building'
      }
    ]
  },

  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    description: 'Ottawa, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Ottawa',
    pictures: []
  }
];

export { mockDestinations };
