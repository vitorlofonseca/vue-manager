const createFile = require("create-file");
const validateParams = require("../cli-utils/createComponent");

module.exports = function createComponent(params) {
  validateParams(params);

  createFile(
    `./${params.componentName}/${params.componentName}.vue`,
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
};
