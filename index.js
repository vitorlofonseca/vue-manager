#! /usr/bin/env node

const createComponent = require("./commands/createComponent");
const getCommand = require("./cli-utils/command");
const POSSIBLE_COMMANDS = require("./constants/possibleCommands");
const getReceivedParams = require("./cli-utils/parameters");

let receivedCommand = getCommand();

const receivedParams = getReceivedParams();

switch (receivedCommand) {
  case POSSIBLE_COMMANDS.CREATE_COMPONENT:
    createComponent(receivedParams);
    break;
  default:
    throw new Error(`Command ${receivedCommand} is not valid`);
}
