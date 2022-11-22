import {
  POSSIBLE_PARAMETERS,
  POSSIBLE_ALIASES_PARAMETERS,
} from "../constants/possibleParameters.js";

export const validateParams = (receivedParams) => {
  if (
    !receivedParams.hasOwnProperty(POSSIBLE_PARAMETERS.COMPONENT_NAME) &&
    !receivedParams.hasOwnProperty(POSSIBLE_ALIASES_PARAMETERS.COMPONENT_NAME)
  ) {
    throw new Error(
      `You need to specify the ${POSSIBLE_PARAMETERS.COMPONENT_NAME} (or ${POSSIBLE_ALIASES_PARAMETERS.COMPONENT_NAME}) property`
    );
  }
};
