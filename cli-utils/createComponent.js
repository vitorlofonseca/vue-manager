import { POSSIBLE_PARAMETERS } from "../constants/possibleParameters.js";

export const validateParams = (receivedParams) => {
  if (!receivedParams.hasOwnProperty(POSSIBLE_PARAMETERS.COMPONENT_NAME)) {
    throw new Error(
      `You need to specify the ${POSSIBLE_PARAMETERS.COMPONENT_NAME} property`
    );
  }
};
