<template>
  <div
    class="base-radio-group"
    :class="[mode === 'vertical' ? 'base-radio-group--vertical' : 'base-radio-group--horizontal']"
  >
    <base-radio
      v-for="option in options"
      :key="option.value"
      :modelValue="modelValue"
      :name="name"
      :value="option.value"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="base-radio-group__item"
    >
      {{ option.label }}
    </base-radio>

    <transition name="fade">
      <div class="base-radio-group__error" aria-label="error" v-if="error">
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RadioOption } from '@/types/Props';
import BaseRadio from '@/components/Base/BaseRadio/BaseRadio.vue';

export default defineComponent({
  components: { BaseRadio },
  name: 'BaseRadioGroup',
  emits: ['update:modelValue'],
  props: {
    error: {
      type: String as PropType<string>,
      required: false,
      default: () => null,
    },
    name: {
      type: String as PropType<string>,
      required: false,
      default: () => '',
    },
    modelValue: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      required: false,
      default: () => false,
    },
    mode: {
      type: String as PropType<string>,
      required: false,
      default: () => 'vertical',
    },
    options: {
      type: Array as PropType<RadioOption[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" src="./BaseRadioGroup.scss" />
