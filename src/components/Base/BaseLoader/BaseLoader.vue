<template>
  <div class="base-loader">
    <svg viewBox="25 25 50 50" class="base-loader__spinner">
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        class="base-loader__spinner-inner"
      />
    </svg>
  </div>
</template>
h
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseLoader',
  props: {
    strokeColor: {
      type: String as PropType<string>,
      required: false,
      default: () => '#FFF',
    },
    strokeWidth: {
      type: Number as PropType<number>,
      required: false,
      default: () => 2,
    },
  },
});
</script>

<style lang="scss" src="./BaseLoader.scss" />
