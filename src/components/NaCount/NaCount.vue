<template>
  <div class="count">
    <button @click="add">+</button>
    <span>{{ count }}</span>
    <button @click="sub">-</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
function add() {
  count.value += 1
}
function sub() {
  count.value -= 1
}
</script>
<script lang="ts">
export default {
  name: 'NaCount'
}
</script>

<style scoped>
.count button,
.count span {
  display: inline-block;
  width: 100px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid orange;
  height: 40px;
  line-height: 40px;
}
.count span {
  margin: 0 10px;
}
</style>
