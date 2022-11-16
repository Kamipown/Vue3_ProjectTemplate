<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'solid',
    validate: (t) => ['brands', 'regular', 'solid'].includes(t),
  },
})

const icon = computed(() => `fa-${props.type} fa-${props.name}`)
</script>
