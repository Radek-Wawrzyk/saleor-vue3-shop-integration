<template>
  <div
    class="base-radio"
    :class="[
      error ? 'base-radio--error' : false,
      disabled ? 'base-radio--disabled': false,
    ]"
  >
    <label
      :for="id"
      :title="name"
      :aria-label="name"
      class="base-radio__label"
    >
      <input
        :checked="isChecked"
        :value="value"
        :id="id"
        :name="name"
        :title="name"
        :aria-label="name"
        @change="$emit('update:modelValue', value)"
        @focus="$emit('focus')"
        type="radio"
        class="base-radio__inner"
      />

      <div
        class="base-radio__box"
        :class="[
          isChecked ? 'base-radio__box--checked' : false,
        ]"
      >
        <span class="base-radio__box-background" />
        <span class="base-radio__box-inner-circle" />
      </div>

      <p class="base-radio__text">
        <slot></slot>
      </p>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { uuid } from '@/helpers/index';

export default defineComponent({
  name: 'BaseRadio',
  emits: ['focus', 'update:modelValue'],
  props: {
    error: {
      type: String as PropType<string>,
      required: false,
      default: () => (null),
    },
    id: {
      type: String as PropType<string>,
      required: false,
      default: () => (uuid()),
    },
    name: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    modelValue: {
      type: [Boolean, String, Number] as PropType<boolean|string|number>,
      required: false,
      default: () => false,
    },
    value: {
      type: [Boolean, String, Number] as PropType<boolean|string|number>,
      required: false,
      default: () => false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => (false),
    },
  },
  setup(props) {
    const isChecked = computed(() => props.value === props.modelValue);

    return {
      isChecked,
    };
  },
});
</script>

<style lang="scss" src="./BaseRadio.scss" />
