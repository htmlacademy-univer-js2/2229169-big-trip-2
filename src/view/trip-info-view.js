import dayjs from 'dayjs';
import AbstractView from '../framework/view/abstract-view';
import { DATE_FORMAT_DAY, DATE_FORMAT_SHORT } from '../const';

const addOffersPrices = (eventType, eventOffers, allOffers) => {
  const allOffersForType = allOffers.find(({ type }) => type === eventType).offers;
  const selectedOfferPrices = eventOffers.map((offer) => allOffersForType.find(({ id }) => id === offer).price);
  return selectedOfferPrices.reduce((sum, price) => sum + price, 0);
};

const addDestinationName = (destination, allDestinations) =>
  allDestinations.find(({ id }) => id === destination).name;

const getTripDestinationNames = (events) => {
  const tripDestinationNames = events.map((event) => event.destinationName);

  if (tripDestinationNames.length <= 3) {
    return tripDestinationNames.join(' &mdash; ');
  } else {
    const firstDestination = tripDestinationNames[0];
    const lastDestination = tripDestinationNames[tripDestinationNames.length - 1];
    return `${firstDestination} &mdash; ... &mdash; ${lastDestination}`;
  }
};


const getTotalPrice = (events) =>
  events.reduce((total, { basePrice, offerPrices }) =>
    total + basePrice + offerPrices, 0);

const getTripDates = (events) => {
  const startTripDate = events[0].startDate;
  const endTripDate = events[events.length - 1].endDate;

  if (dayjs(startTripDate).month() === dayjs(endTripDate).month()) {
    return `${dayjs(startTripDate).format(DATE_FORMAT_SHORT)}&nbsp;&mdash;&nbsp;${dayjs(endTripDate).format(DATE_FORMAT_DAY)}`;
  }

  return `${dayjs(startTripDate).format(DATE_FORMAT_SHORT)}&nbsp;&mdash;&nbsp;${dayjs(endTripDate).format(DATE_FORMAT_SHORT)}`;
};

const createTripInfoTemplate = (events, allOffers, allDestinations) => {
  const tripEvents = events.map((event) => ({
    ...event,
    offerPrices: addOffersPrices(event.type, event.offers, allOffers),
    destinationName: addDestinationName(event.destination, allDestinations)
  }));

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${getTripDestinationNames(tripEvents)}</h1>
              <p class="trip-info__dates">${getTripDates(tripEvents)}</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalPrice(tripEvents)}</span>
            </p>
          </section>`;
};

export default class TripInfoView extends AbstractView {
  #events = null;
  #allOffers = null;
  #allDestinations = null;

  constructor(events, allOffers, allDestinations) {
    super();
    this.#events = events;
    this.#allOffers = allOffers;
    this.#allDestinations = allDestinations;
  }

  get template() {
    return createTripInfoTemplate(this.#events, this.#allOffers, this.#allDestinations);
  }
}
