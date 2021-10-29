<template>
  <component
    :is="componentType"
    :title="title"
    :aria-label="title"
    :type="nativeType"
    :disabled="disabled"
    :to="to && componentType === 'router-link' ? to : null"
    :href="to && componentType === 'a' ? to : null"
    :class="buttonCssClasses"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <span
      class="base-button__inner"
      :class="[
        loading ? 'base-button__inner--is-loading' : false,
      ]"
    >
      <slot></slot>
    </span>

    <transition name="fade">
      <base-loader
        v-if="loading"
        class="base-button__loader"
      />
    </transition>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import BaseLoader from '@/components/Base/BaseLoader/BaseLoader.vue';

export default defineComponent({
  name: 'BaseButton',
  emits: ['click', 'focus'],
  components: {
    BaseLoader,
  },
  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    title: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    to: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    nativeType: {
      type: String as PropType<string>,
      required: false,
      default: () => ('button'),
    },
    nativeLink: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    type: {
      type: String as PropType<string>,
      required: false,
      default: () => ('primary-dark'),
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => false,
    },
    size: {
      type: String as PropType<string>,
      required: false,
      default: () => ('medium'),
    },
  },
  setup(props) {
    const componentType = computed(() => {
      if (props.to && props.nativeLink) return 'a';
      if (props.to && !props.nativeType) return 'router-link';
      return 'button';
    });
    const buttonCssClasses = computed(() => {
      return [
        props.type === 'primary-dark' ? 'base-button--primary-dark' : false,
        props.type === 'primary-light' ? 'base-button--primary-light' : false,
        props.disabled ? 'base-button--disabled' : false,
        props.isActive ? 'base-button--is-active' : false,
        props.size === 'large' ? 'base-button--large' : false,
        props.size === 'medium' ? 'base-button--medium' : false,
        props.size === 'small' ? 'base-button--small' : false,
      ];
    });

    return {
      componentType,
      buttonCssClasses,
    };
  },
});
</script>

<style lang="scss" src="./BaseButton.scss" />
