#! /usr/bin/env node

import { createComponent } from "./commands/createComponent.js";
import { getCommand } from "./cli-utils/command.js";
import {
  POSSIBLE_COMMANDS,
  POSSIBLE_ALIASES_COMMANDS,
} from "./constants/possibleCommands.js";
import { getReceivedParams } from "./cli-utils/parameters.js";

let receivedCommand = getCommand();

const receivedParams = getReceivedParams();

switch (receivedCommand) {
  case POSSIBLE_COMMANDS.CREATE_COMPONENT ||
    POSSIBLE_ALIASES_COMMANDS.CREATE_COMPONENT:
    createComponent(receivedParams);
    break;
  default:
    throw new Error(`Command ${receivedCommand} is not valid`);
}
