<template>
  <div class="product-variants">
    <ul class="product-variants__list">
      <product-variant-selector
        v-for="variant in variants"
        :key="variant.id"
        :variant="variant"
        :is-active="isVariantSelected(variant)"
        @select-variant="selectVariant($event)"
        class="product-variants__list-item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { ProductVariant } from '@/types/Product';
import ProductVariantSelector from '@/components/Product/ProductVariantSelector/ProductVariantSelector.vue';

export default defineComponent({
  name: 'ProductVariants',
  components: {
    ProductVariantSelector,
  },
  props: {
    variants: {
      type: Array as PropType<ProductVariant[]>,
      required: false,
      default: () => ([]),
    },
    productDefaultVariant: {
      type: Object as PropType<ProductVariant>,
      required: true,
    },
    productDefaultVariantId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const selectedVariant = ref() as any;
    const defaultVariant = computed(() => props.productDefaultVariant);
    const isVariantSelected = ((variant: ProductVariant) => variant.id === selectedVariant.value.id);

    const selectVariant = (variant: ProductVariant) => {
      selectedVariant.value = variant;
    };
    selectVariant(defaultVariant.value);

    return {
      selectVariant,
      isVariantSelected,
      selectedVariant,
    };
  },
});
</script>

<style lang="scss" src="./ProductVariants.scss" />
