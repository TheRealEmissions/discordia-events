var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Decorators from "../Decorators.js";
import { GeneralEvents as GeneralEventsEnum } from "../enums/CommonEvents.js";
import { EventTypes } from "../enums/EventTypes.js";
import Logger from "ts-logger";
class GeneralEvents {
    static on(message, ...args) {
        Logger.log(message, "INFO", ...args);
    }
    static debug(message, ...args) {
        Logger.log(message, "DEBUG", ...args);
    }
    static warn(message, ...args) {
        Logger.warn(message, "WARN", ...args);
    }
    static error(message, ...args) {
        Logger.internalError(message, "ERROR", ...args);
    }
    static userError(message, ...args) {
        Logger.userError(message, "USER ERROR", ...args);
    }
}
__decorate([
    Decorators.bind(GeneralEventsEnum.INFO, EventTypes.ON)
], GeneralEvents, "on", null);
__decorate([
    Decorators.bind(GeneralEventsEnum.DEBUG, EventTypes.ON)
], GeneralEvents, "debug", null);
__decorate([
    Decorators.bind(GeneralEventsEnum.WARN, EventTypes.ON)
], GeneralEvents, "warn", null);
__decorate([
    Decorators.bind(GeneralEventsEnum.ERROR, EventTypes.ON)
], GeneralEvents, "error", null);
__decorate([
    Decorators.bind(GeneralEventsEnum.USER_ERROR, EventTypes.ON)
], GeneralEvents, "userError", null);
export default GeneralEvents;
