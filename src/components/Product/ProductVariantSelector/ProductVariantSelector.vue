<template>
  <li class="product-variant-selector">
    <button
      class="product-variant-selector__button"
      :class="[
        isActive ? 'product-variant-selector__button--is-active' : false,
        isDisabled ? 'product-variant-selector__button--is-disabled' : false,
      ]"
      :aria-label="variant.name"
      :title="variant.name"
      @click="selectVariant()"
    >
      <span class="product-variant-selector__name">
        {{ variant.name }}
      </span>
    </button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ProductVariant } from '@/types/Product';

export default defineComponent({
  name: 'ProductVariantSelector',
  emits: ['select-variant'],
  props: {
    variant: {
      type: Object as PropType<ProductVariant>,
      required: true,
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      required: false,
      defaut: () => false,
    },
  },
  setup(props, { emit }) {
    const isDisabled = computed(() => props.variant.quantityAvailable && props.variant.quantityAvailable <= 0);
    const selectVariant = () => {
      emit('select-variant', props.variant);
    };

    return {
      selectVariant,
      isDisabled,
    };
  },
});
</script>

<style lang="scss" src="./ProductVariantSelector.scss" />
