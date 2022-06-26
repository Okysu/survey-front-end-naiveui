<template>
  <n-message-provider>
    <n-dialog-provider>
      <MessageApi/>
    </n-dialog-provider>
  </n-message-provider>
    <div id="app">
      <router-view />
    </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import MessageApi from "@/components/MessageApi.vue";
import { NMessageProvider, NDialogProvider } from "naive-ui";

export default {
  components: { MessageApi, NMessageProvider, NDialogProvider },
  name: "App",
  setup() {},
};
</script>
