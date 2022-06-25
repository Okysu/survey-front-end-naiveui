<template>
  <n-message-provider>
    <MessageApi/>
  </n-message-provider>
    <div id="app">
      <router-view />
    </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import MessageApi from "@/components/MessageApi.vue";
import { NMessageProvider } from "naive-ui";

export default {
  components: { MessageApi, NMessageProvider },
  name: "App",
  setup() {},
};
</script>
