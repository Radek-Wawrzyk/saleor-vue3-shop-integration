<template>
  <div class="product-details">
    <span class="product-details__label" v-if="!!productLabel">
      {{ productLabel }}
    </span>

    <h1 class="product-details__name">
      {{ productName }}
    </h1>

    <span class="product-details__sub-header" v-if="!!productSubTitle">
      {{ productSubTitle }}
    </span>

    <base-price
      :price="productPrice"
      class="product-details__price"
    />

    <product-variants
      class="product-details__variants"
      :variants="productVariants"
      :product-default-variant-id="productDefaultVariantId"
      :product-default-variant="productDefaultVariant"
      @select-variant="selectVariant($event)"
      v-if="productVariants && productVariants.length"
    />

    <base-button
      class="product-details__add-to-bag"
      width="full"
      @click="addToBag()"
    >
      Add to Bag
    </base-button>

    <div
      class="product-details__description"
      v-html="descriptionHTML"
      v-if="descriptionHTML && descriptionHTML.length"
    />

    <p
      v-else
      class="product-details__description product-details__description--empty"
    >
      No description
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { ProductPrice, ProductVariant } from '@/types/Product';
import { getHTML } from '@/helpers/index';

import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BasePrice from '@/components/Base/BasePrice/BasePrice.vue';
import ProductVariants from '@/components/Product/ProductVariants/ProductVariants.vue';

export default defineComponent({
  components: { BaseButton, BasePrice, ProductVariants },
  name: 'ProductDetails',
  props: {
    productName: {
      type: String as PropType<string>,
      required: true,
    },
    productDescription: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    productPrice: {
      type: Object as PropType<ProductPrice>,
      required: true,
    },
    productVariants: {
      type: Array as PropType<ProductVariant[]>,
      required: false,
      default: () => ([]),
    },
    productSubTitle: {
      type: String as PropType<string | undefined>,
      required: false,
      default: () => (''),
    },
    productLabel: {
      type: String as PropType<string | undefined>,
      required: false,
      default: () => (''),
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
    const selectedVariant = ref(props.productDefaultVariant) as any;
    const rawDescription = computed(() => JSON.parse(props.productDescription));
    const descriptionHTML = computed(() => getHTML(props.productDescription));

    const selectVariant = (variant: ProductVariant) => {
      selectedVariant.value = variant;
    };

    const addToBag = () => {
      // ToDo - Create logic for bag
      console.log('AddToBag() mocked', { qty: 1, variantId: selectedVariant?.value?.id });
    };

    return {
      addToBag,
      descriptionHTML,
      rawDescription,
      selectVariant,
    };
  },
});
</script>

<style lang="scss" src="./ProductDetails.scss" />
