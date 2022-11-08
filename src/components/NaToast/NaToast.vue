<template>
  <div class="toast">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'NaToast'
}
</script>
<style scoped>
.toast {
  color: black;
  border: 1px solid #eee;
}
</style>
