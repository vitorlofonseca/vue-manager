import createFile from "create-file";
import { validateParams } from "../cli-utils/createComponent.js";

export const createComponent = (params) => {
  validateParams(params);

  createFile(
    `./${params.componentName || params.n}/${
      params.componentName || params.n
    }.vue`,
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
