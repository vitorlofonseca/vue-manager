const PARAMETERS_INDEX = 3;
const receivedParameters = {};

module.exports = function getReceivedParams() {
  process.argv.forEach(function (val, index) {
    if (index < PARAMETERS_INDEX) {
      return;
    }

    if (!val.includes("=")) {
      throw new Error("You need to specify what is the parameter " + val);
    }

    const [parameter, value] = val.split("=");

    receivedParameters[parameter] = value;
  });

  return receivedParameters;
};
