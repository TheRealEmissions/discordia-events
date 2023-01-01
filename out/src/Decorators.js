import BaseApp from "./BaseApp.js";
import { EventTypes } from "./enums/EventTypes.js";
class Decorators {
    static bind(eventName, type = EventTypes.ON) {
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
export default Decorators;
