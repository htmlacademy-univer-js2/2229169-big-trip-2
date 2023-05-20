import EditFormView from '../view/edit-form-view.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

export default class RootPresenter {
  constructor() {
    this.eventList = new EventsListView();
  }

  init(rootContainer, eventsModel) {
    this.rootContainer = rootContainer;
    this.eventsModel = eventsModel;
    this.events = [...this.eventsModel.events];

    render(this.eventList, this.rootContainer);
    render(new EditFormView(this.events[0]), this.eventList.getElement());

    this.events.forEach((event) => render(new EventView(event), this.eventList.getElement()));
  }
}