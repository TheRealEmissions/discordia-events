import App from "../App";
import { GeneralEvents } from "../enums/CommonEvents.js";
import { EventTypes } from "../enums/EventTypes.js";
import Logger from "ts-logger";

class InfoEvent {
  @App.bind(GeneralEvents.INFO, EventTypes.ON)
  static on(message: string, ...args: string[]) {
    Logger.log(message, "INFO", ...args);
  }
}

export default InfoEvent;
