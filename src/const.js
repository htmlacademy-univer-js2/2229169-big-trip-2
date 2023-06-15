import dayjs from 'dayjs';

const TIME = {
  MINUTES: 60,
  HOURS: 24
};
const PRICE = {
  MIN: 100,
  MAX: 600
};

const FILTER_TYPES = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past'
};

const SORT_TYPES = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price'
};

const USER_ACTIONS = {
  UPDATE: 'UPDATE_POINT',
  ADD: 'ADD_POINT',
  DELETE: 'DELETE_POINT',
};

const UPDATE_TYPES = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const NEW_POINT = {
  basePrice: 0,
  startDate: dayjs(),
  endDate: dayjs(),
  destination: undefined,
  isFavorite: false,
  offers: [],
  type: 'taxi',
};

const TIME_LIMIT = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const DATE_FORMAT_SHORT = 'MMM D';
const DATE_FORMAT_DAY = 'DD';

export {
  TIME,
  PRICE,
  FILTER_TYPES,
  SORT_TYPES,
  USER_ACTIONS,
  UPDATE_TYPES,
  NEW_POINT,
  TIME_LIMIT,
  DATE_FORMAT_DAY,
  DATE_FORMAT_SHORT
};
