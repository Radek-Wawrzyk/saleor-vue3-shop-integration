<template>
  <div class="page product-page" v-if="!loading && product">
    <div class="product-page__container container">
      <section class="product-page__content">
        <product-gallery
          :images="productImages"
          class="product-page__content-gallery"
        />

        <product-details
          :product-name="productName"
          :product-description="productDescription"
          :product-price="productPrice"
          :product-variants="productVariants"
          :product-label="productLabel"
          :product-sub-title="productSubTitle"
          :product-default-variant-id="productDefaultVariantId"
          :product-default-variant="productDefaultVariant"
          class="product-page__content-details"
        />
      </section>

      <section class="product-page__bottom">
        ToDo -> CMS sections here
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getSingleProduct } from '@/graphql/queries/product';
import { useQuery, useResult } from '@vue/apollo-composable';
import { ProductMetaData, ProductVariant } from '@/types/Product';

import ProductGallery from '@/components/Product/ProductGallery/ProductGallery.vue';
import ProductDetails from '@/components/Product/ProductDetails/ProductDetails.vue';

export default defineComponent({
  name: 'ProductPage',
  components: { ProductGallery, ProductDetails },
  setup() {
    const route = useRoute();
    const slug = computed(() => route.params.slug);

    const { result, loading, error } = useQuery(getSingleProduct, { slug });
    const product = useResult(result, null);

    const productImages = computed(() => product?.value?.images);
    const productName = computed(() => product?.value?.name);
    const productDescription = computed(() => product?.value?.description);
    const productVariants = computed(() => product?.value?.variants);
    const defaultVariant = computed(() => product?.value?.defaultVariant);
    const productId = computed(() => product?.value?.id);
    const productPrice = computed(() => product?.value?.pricing);
    const productLabel = computed(() => product?.value?.metadata?.find((meta: ProductMetaData) => meta.key === 'headLabel')?.value);
    const productSubTitle = computed(() => product?.value?.metadata?.find((meta: ProductMetaData) => meta.key === 'subTitle')?.value);
    const productDefaultVariantId = computed(() => product?.value.defaultVariant.id);
    const productDefaultVariant = computed(() => product?.value?.variants?.find((variant: ProductVariant) => variant.id === productDefaultVariantId.value));

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
      productLabel,
      productSubTitle,
      productDefaultVariantId,
      productDefaultVariant,
      slug,
      defaultVariant,
    };
  },
});
</script>

<style lang="scss" src="./Product.scss" />
