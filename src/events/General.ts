import Decorators from "../Decorators.js";
import { GeneralEvents as GeneralEventsEnum } from "../enums/CommonEvents.js";
import { EventTypes } from "../enums/EventTypes.js";
import Logger from "ts-logger";
import { SettingsConfig } from "../../config/internal/Settings.js";

class GeneralEvents {
  @Decorators.bind(GeneralEventsEnum.INFO, EventTypes.ON)
  static on(message: string, ...args: string[]) {
    if (!SettingsConfig.toggles.info) return;
    Logger.log(message, "INFO", ...args);
  }

  @Decorators.bind(GeneralEventsEnum.DEBUG, EventTypes.ON)
  static debug(message: string, ...args: string[]) {
    if (!SettingsConfig.toggles.debug) return;
    Logger.log(message, "DEBUG", ...args);
  }

  @Decorators.bind(GeneralEventsEnum.WARN, EventTypes.ON)
  static warn(message: string, ...args: string[]) {
    if (!SettingsConfig.toggles.warn) return;
    Logger.warn(message, "WARN", ...args);
  }

  @Decorators.bind(GeneralEventsEnum.ERROR, EventTypes.ON)
  static error(message: string, ...args: string[]) {
    if (!SettingsConfig.toggles.error) return;
    Logger.internalError(message, "ERROR", ...args);
  }

  @Decorators.bind(GeneralEventsEnum.USER_ERROR, EventTypes.ON)
  static userError(message: string, ...args: string[]) {
    if (!SettingsConfig.toggles.userError) return;
    Logger.userError(message, "USER ERROR", ...args);
  }
}

export default GeneralEvents;
