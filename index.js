#! /usr/bin/env node

const createFile = require("create-file");
const PARAMETERS_INDEX = 2;
const PARAMETERS = {
  COMPONENT_NAME: "componentName",
};
const parameters = {};

process.argv.forEach(function (val, index, array) {
  if (index < PARAMETERS_INDEX) {
    return;
  }

  if (!val.includes("=")) {
    throw new Error("You need to specify what is the parameter " + val);
  }

  const [parameter, value] = val.split("=");

  parameters[parameter] = value;
});

if (!parameters.hasOwnProperty(PARAMETERS.COMPONENT_NAME)) {
  throw new Error(
    `You need to specify the ${PARAMETERS.COMPONENT_NAME} property`
  );
}

createFile(
  `./${parameters.componentName}/${parameters.componentName}.vue`,
  `<template>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>`,
  function (err) {
    // file either already exists or is now created (including non existing directories)
  }
);
