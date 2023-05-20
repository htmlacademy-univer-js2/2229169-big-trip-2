import { getRandomInteger } from '../utils';
import { TYPES, DESTINATIONS } from './const';
import { OFFERS } from './offers';

const generateType = () => TYPES[getRandomInteger(0, TYPES.length - 1)];

const generateEvent = () => (
  {
    basePrice: getRandomInteger(100, 500),
    startDate: '2019-07-11T09:54:56.845Z',
    endDate: '2019-07-15T11:22:13.375Z',
    destination: getRandomInteger(1, DESTINATIONS.length),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: [... new Set(Array.from({ length: getRandomInteger(0, OFFERS.length) }, () => getRandomInteger(1, OFFERS.length - 1)))],
    type: generateType(),
  });

export { DESTINATIONS, generateEvent };