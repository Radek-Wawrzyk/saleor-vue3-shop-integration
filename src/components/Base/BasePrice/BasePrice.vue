<template>
  <div class="base-price">
    <span class="base-price__regular">
      {{ price }}
    </span>
  </div>
</template>

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
    const price = computed(() => formatPrice(props.price.priceRange.start.net.amount, props.price.priceRange.start.net.currency));

    return {
      onSale,
      price,
    };
  }
});
</script>
