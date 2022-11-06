<template>
  <i :class="'i-ep:' + iconName" />
</template>
<script setup lang="ts">
export type LIconType = 'circle-close-filled' | 'circle-check-filled'
export interface IconProps {
  name: LIconType
}

/* eslint-disable */
const props = withDefaults(defineProps<IconProps>(), {
  name: 'circle-check-filled'
})
const iconName = props.name
</script>
<script lang="ts">
export default {
  name: 'LIcon'
}
</script>
