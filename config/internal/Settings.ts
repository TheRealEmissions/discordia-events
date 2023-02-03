import { ISettings } from "./interfaces/Settings.js";
import FS from "fs-extra-promise";
import YAML from "yaml";
import { fileURLToPath } from "node:url";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Settings.yml", import.meta.url)),
    "utf8"
  )
);

export const SettingsConfig: ISettings = config;
