<template>
  <button class="button">
    <slot />
  </button>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: 'NaButton'
}
</script>
<style scoped>
.button {
  color: white;
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
