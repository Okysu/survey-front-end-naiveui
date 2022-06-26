<template>
  <router-view/>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage, useDialog } from "naive-ui";

export default defineComponent({
  name: "MessageApi",
  setup() {
    window.$message = useMessage();
    window.$dialog = useDialog();
  }
})
</script>
