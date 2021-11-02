<template>
  <div
    class="base-input"
    :class="[
      isFocused || modelValue ? 'base-input--active' : false,
      error ? 'base-input--error' : false,
      disabled ? 'base-input--disabled' : false,
    ]"
  >
    <label
      class="base-input__label"
      :class="[isFocused || modelValue ? 'base-input__label--is-focus' : false]"
      :for="id"
      v-if="label"
    >
      {{ label }}
    </label>

    <input
      :value="modelValue"
      :type="type"
      :id="id"
      :name="name"
      :class="[!!error ? 'base-input__inner--error' : false]"
      :title="name"
      :aria-label="name"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="
        isFocused = true;
        $emit('focus');
      "
      @focusout="isFocused = false"
      class="base-input__inner"
    />

    <transition name="fade">
      <div class="base-input__error" aria-label="error" v-if="error">
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { uuid } from '@/helpers/index';

export default defineComponent({
  name: 'BaseInput',
  emits: ['focus', 'update:modelValue'],
  props: {
    error: {
      type: String as PropType<string>,
      required: false,
      default: () => null,
    },
    label: {
      type: String as PropType<string>,
      required: false,
      default: () => null,
    },
    id: {
      type: String as PropType<string>,
      required: false,
      default: () => uuid(),
    },
    name: {
      type: String as PropType<string>,
      required: false,
      default: () => '',
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: () => '',
    },
    type: {
      type: String as PropType<string>,
      required: false,
      default: () => 'text',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
  },
  setup() {
    const isFocused = ref(false);

    return {
      isFocused,
    };
  },
});
</script>

<style lang="scss" src="./BaseInput.scss" />
