<template>
  <button :class="className + 'align-center flex justify-center py-2 px-4 font-semibold rounded-lg shadow-md text-white border-none cursor-pointer'">
    <slot />
  </button>
</template>

<script setup lang="ts">
export type color = 'green' | 'red' | 'blue'
export type size = 'large' | 'small' | 'normal'
export interface PropsType {
  color?: color
  size?: size
}
const props = withDefaults(defineProps<PropsType>(), { color: 'red', size: 'normal' })
const className = `bg-${props.color}-500 `
</script>

<script lang="ts">
export default {
  name: 'LButton'
}
</script>
<style lang="scss" scoped></style>
