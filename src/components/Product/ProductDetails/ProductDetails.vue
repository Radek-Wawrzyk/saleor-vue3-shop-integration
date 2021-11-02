<template>
  <div class="product-details">
    <h1 class="product-details__name">
      {{ productName }}
    </h1>

    <!-- <span class="product-details__sub-header" v-if="!!productSubHeader">
      {{ productSubHeader }}
    </span> -->

    <!-- <base-price
      :price="productPrice"
      class="product-details__price"
    />

    <product-variants
      class="product-details__variants"
      :variants="productVariants"
    /> -->

    <base-button
      class="product-details__add-to-bag"
      width="full"
      @click="addToBag()"
    >
      Add to Bag
    </base-button>

    <div
      class="product-details__description"
      v-html="productDescription"
      v-if="productDescription && productDescription.length"
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
import { defineComponent, PropType } from 'vue';
import { ProductPrice, ProductVariant } from '@/types/Product';

import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
// import BasePrice from '@/components/Base/BasePrice/BasePrice.vue';
// import ProductVariants from '@/components/Product/ProductVariants/ProductVariants.vue';

export default defineComponent({
  components: { BaseButton },
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
      default: () => (''),
    },
  },
  setup() {
    const addToBag = () => {
      // ToDo - Create logic for bag
      console.log('AddToBag() mocked');
    };

    return {
      addToBag,
    };
  },
});
</script>

<style lang="scss" src="./ProductDetails.scss" />
