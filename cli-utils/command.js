const COMMAND_INDEX = 2;
const POSSIBLE_COMMANDS = require("../constants/possibleCommands");

module.exports = function getCommand() {
  const receivedCommand = process.argv[COMMAND_INDEX];

  if (!receivedCommand) {
    throw new Error(`You must pass a command`);
  }

  if (POSSIBLE_COMMANDS.includes(receivedCommand)) {
    return;
  }

  throw new Error(`Command ${receivedCommand} is invalid`);
};
