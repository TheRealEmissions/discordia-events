import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import { GeneralEvents, DiscordEvents } from "./enums/CommonEvents.js";
import { EventEmitter } from "node:events";
import { EventTypes } from "./enums/EventTypes.js";
class BaseApp extends HeadFile {
    constructor() {
        super();
    }
    type = Dependency.EVENTS;
    name = "Events";
    load = true;
    GeneralEvents = GeneralEvents;
    DiscordEvents = DiscordEvents;
    EventTypes = EventTypes;
    static events = new EventEmitter();
    getDependencies() {
        return [];
    }
    getEventEmitter() {
        return BaseApp.events;
    }
}
export default BaseApp;
