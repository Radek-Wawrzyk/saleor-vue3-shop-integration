<template>
  <div class="page product-page" v-if="!loading && product">
    {{ product }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getSingleProduct } from '@/graphql/queries/product';
import { useQuery, useResult } from '@vue/apollo-composable';

export default defineComponent({
  name: 'ProductPage',
  setup() {
    const route = useRoute();
    const slug = computed(() => route.params.slug);

    const { result, loading, error } = useQuery(getSingleProduct, { slug });
    const product = useResult(result, null);

    const productImages = computed(() => product.value.images);
    const productName = computed(() => product.value.name);
    const productDescription = computed(() => product.value.description);
    const productVariants = computed(() => product.value.variants);
    const defaultVariant = computed(() => product.value.defaultVariant);
    const productId = computed(() => product.value.id);
    const productPrice = computed(() => product.value.pricing);

    return {
      route,
      result,
      loading,
      error,
      product,
      productImages,
      productName,
      productDescription,
      productVariants,
      productId,
      productPrice,
      slug,
      defaultVariant,
    };
  },
});
</script>

<style lang="scss" src="./Product.scss" />
