import BaseApp from "./BaseApp.js";
import { GeneralEvents } from "./enums/CommonEvents.js";
import { EventTypes } from "./enums/EventTypes.js";
import Events from "./events/General.js";
class App extends BaseApp {
    loadedEvents = [];
    events = [];
    constructor() {
        super();
        this.events = [new Events()];
    }
    init() {
        BaseApp.events.emit(GeneralEvents.INFO, "Events loaded");
    }
    bind(eventName, type = EventTypes.ON) {
        return (target, propertyKey, descriptor) => {
            switch (type) {
                case EventTypes.ON:
                    BaseApp.events.on(eventName, (...args) => {
                        descriptor.value(...args);
                    });
                    break;
                case EventTypes.ONCE:
                    BaseApp.events.once(eventName, (...args) => {
                        descriptor.value(...args);
                    });
                    break;
            }
        };
    }
}
export default App;
