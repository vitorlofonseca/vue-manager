const COMMAND_INDEX = 2;
import {
  POSSIBLE_COMMANDS,
  POSSIBLE_ALIASES_COMMANDS,
} from "../constants/possibleCommands.js";

export const getCommand = () => {
  const receivedCommand = process.argv[COMMAND_INDEX];

  if (!receivedCommand) {
    throw new Error(`You must pass a command`);
  }

  if (
    POSSIBLE_COMMANDS.includes(receivedCommand) ||
    POSSIBLE_ALIASES_COMMANDS.includes(receivedCommand)
  ) {
    return;
  }

  throw new Error(`Command ${receivedCommand} is invalid`);
};
