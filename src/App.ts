import BaseApp from "./BaseApp.js";
import { DiscordEvents, GeneralEvents } from "./enums/CommonEvents.js";
import { EventTypes } from "./enums/EventTypes.js";
import Events from "./events/General.js";

class App extends BaseApp {
  loadedEvents: any[] = [];
  events: any[] = [];
  constructor() {
    super();
    this.events = [new Events()];
  }

  // @App.bind(GeneralEvents.INFO, EventTypes.ON)
  // info(message: string) {
  //   console.debug("EVENTS => INFO => ", message);
  // }

  async init() {
    BaseApp.events.emit(GeneralEvents.INFO, "Events loaded");
  }

  bind<T extends string>(
    eventName: GeneralEvents | DiscordEvents | T,
    type: EventTypes = EventTypes.ON
  ) {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      switch (type) {
        case EventTypes.ON:
          BaseApp.events.on(eventName, (...args: any[]) => {
            descriptor.value(...args);
          });
          break;
        case EventTypes.ONCE:
          BaseApp.events.once(eventName, (...args: any[]) => {
            descriptor.value(...args);
          });
          break;
      }
    };
  }
}

export default App;
