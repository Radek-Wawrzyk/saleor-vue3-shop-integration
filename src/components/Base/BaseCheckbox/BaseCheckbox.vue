/* eslint-disable max-len */
<template>
  <div
    class="base-checkbox"
    :class="[
      error ? 'base-checkbox--error' : false,
      disabled ? 'base-checkbox--disabled': false,
    ]"
  >
    <label
      :for="id"
      :title="name"
      :aria-label="name"
      class="base-checkbox__label"
    >
      <input
        :checked="modelValue"
        :value="modelValue"
        :id="id"
        :name="name"
        :title="name"
        :aria-label="name"
        @change="$emit('update:modelValue', $event.target.checked)"
        @focus="$emit('focus')"
        type="checkbox"
        class="base-checkbox__inner"
      />

      <span class="base-checkbox__box">
        <span class="base-checkbox__box-circle" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          class="base-checkbox__box-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.21981 0.469811L3.50006 5.18956L1.78031 3.46981C1.48603 3.18558 1.01825 3.18965 0.728947 3.47895C0.439647 3.76825 0.435582 4.23603 0.719811 4.53031L2.96981 6.78031C3.26269 7.0731 3.73744 7.0731 4.03031 6.78031L9.28031 1.53031C9.56454 1.23603 9.56047 0.768248 9.27117 0.478947C8.98187 0.189647 8.5141 0.185582 8.21981 0.469811Z"
            fill="white"
          />
        </svg>
      </span>

      <p class="base-checkbox__text">
        <slot></slot>
      </p>
    </label>

    <transition name="fade">
      <div
        class="base-checkbox__error"
        aria-label="error"
        v-if="error"
      >
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { uuid } from '@/helpers/index';

export default defineComponent({
  name: 'BaseCheckbox',
  emits: ['focus', 'update:modelValue'],
  props: {
    error: {
      type: String as PropType<string>,
      required: false,
      default: () => (null),
    },
    label: {
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
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => (false),
    },
  },
});
</script>

<style lang="scss" src="./BaseCheckbox.scss" />
