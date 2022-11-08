<template>
  <i :class="'i-ep:' + iconName"></i>
</template>
<script setup lang="ts">
import 'uno.css'
export type LIconType = 'circle-close-filled' | 'circle-check-filled'
export interface IconProps {
  name: LIconType
}

/* eslint-disable */
const props = withDefaults(defineProps<IconProps>(), {
  name: 'circle-check-filled'
})
const iconName: string = props.name
</script>
<script lang="ts">
export default {
  name: 'NaIcon'
}
</script>
