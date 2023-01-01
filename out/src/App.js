var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseApp from "./BaseApp.js";
import { GeneralEvents } from "./enums/CommonEvents.js";
import { EventTypes } from "./enums/EventTypes.js";
class App extends BaseApp {
    loadedEvents = [];
    constructor() {
        super();
    }
    info(message) {
        console.debug("EVENTS => INFO => ", message);
    }
    init() {
        BaseApp.events.emit(GeneralEvents.INFO, "Events loaded");
    }
    static bind(eventName, type = EventTypes.ON) {
        return (target, propertyKey, descriptor) => {
            switch (type) {
                case EventTypes.ON:
                    this.events.on(eventName, (...args) => {
                        descriptor.value(...args);
                    });
                    break;
                case EventTypes.ONCE:
                    this.events.once(eventName, (...args) => {
                        descriptor.value(...args);
                    });
                    break;
            }
        };
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
__decorate([
    App.bind(GeneralEvents.INFO, EventTypes.ON)
], App.prototype, "info", null);
export default App;
