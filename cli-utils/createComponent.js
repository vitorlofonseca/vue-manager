const POSSIBLE_PARAMETERS = require("../constants/possibleParameters");

module.exports = function validateParams(receivedParams) {
  if (!receivedParams.hasOwnProperty(POSSIBLE_PARAMETERS.COMPONENT_NAME)) {
    throw new Error(
      `You need to specify the ${POSSIBLE_PARAMETERS.COMPONENT_NAME} property`
    );
  }
};
