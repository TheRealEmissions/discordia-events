import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import { GeneralEvents, DiscordEvents } from "./enums/CommonEvents.js";
import { EventEmitter } from "node:events";
import { EventTypes } from "./enums/EventTypes.js";

abstract class BaseApp extends Base {
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

  abstract init(): Promise<void>;
  getDependencies(): Dependency[] {
    return [];
  }

  getEventEmitter() {
    return BaseApp.events;
  }

  abstract bind(
    eventName: GeneralEvents | DiscordEvents | string,
    type: EventTypes
  ): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
}

export default BaseApp;
