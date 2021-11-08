<template>
  <div class="base-price">
    <span
      class="base-price__regular base-price__regular--new"
      v-if="onSale && discountPrice && discountPrice.length"
    >
      {{ discountPrice }}
    </span>

    <span
      class="base-price__regular"
      :class="[
        onSale ? 'base-price__regular--old' : null,
      ]"
    >
      {{ regularPrice }}
    </span>

    <span
      v-if="onSale && salePercentageMessage"
      class="base-price__discount"
    >
      {{ salePercentageMessage }}
    </span>
  </div>
</template>s

<script lang="ts">
import { ProductPricing } from '@/types/Product';
import { computed, defineComponent, PropType } from 'vue';
import { formatPrice } from '@/helpers/index';

export default defineComponent({
  name: 'BasePrice',
  props: {
    price: {
      type: Object as PropType<ProductPricing>,
      required: true,
    },
  },
  setup(props) {
    const onSale = computed(() => props.price.onSale);
    const regularPrice = computed(() => formatPrice(props.price.priceRangeUndiscounted.start.gross.amount, props.price.priceRangeUndiscounted.start.gross.currency));
    const regularRawPrice = computed(() => props.price.priceRange.start.gross.amount);
    const discountRawPrice = computed(() => props.price.priceRangeUndiscounted.start.gross.amount);
    const discountPrice = computed(() => formatPrice(props.price.priceRange.start.gross.amount, props.price.priceRange.start.gross.currency));
    const salePercentageMessage = computed(() => {
      if (onSale) {
        const percentage = 100 - ((regularRawPrice.value * 100) / discountRawPrice.value);
        return `${percentage}% Off`;
      }

      return null;
    });

    return {
      onSale,
      regularPrice,
      regularRawPrice,
      discountRawPrice,
      discountPrice,
      salePercentageMessage,
    };
  }
});
</script>

<style lang="scss" src="./BasePrice.scss" />
