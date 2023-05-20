import MenuView from './view/menu.js';
import FilterView from './view/filter.js';
import { render } from './render.js';
import SortingView from './view/sorting';
import EventsListView from './view/events-list.js';
import EventView from './view/event.js';
import EditFormView from './view/edit-form.js';

const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');

const navigation = headerElement.querySelector('.trip-controls__navigation');
const filters = headerElement.querySelector('.trip-controls__filters');
const content = mainElement.querySelector('.trip-events');

render(new MenuView(), navigation);
render(new FilterView(), filters);
render(new SortingView(), content);
render(new EventsListView(), content);

const eventsList = content.querySelector('.trip-events__list');
render(new EditFormView(), eventsList);
for (let i = 0; i < 3; i++) {
  render(new EventView(), eventsList);
}
