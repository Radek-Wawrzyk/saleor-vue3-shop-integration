<template>
  <div class="product-gallery">
    <ul class="product-gallery__list">
      <li
        class="product-gallery__list-item"
        v-for="(image, index) in images"
        :key="image.id"
      >
        <button
          class="product-gallery__list-button"
          aria-label="Show image"
          title="Show image"
          @click="showFullImage(index)"
        >
          <base-image
            class="product-gallery__list-image"
            :src="image.url"
            :alt="image.alt"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProductImage } from '@/types/Product';
import BaseImage from '@/components/Base/BaseImage/BaseImage.vue';

export default defineComponent({
  components: { BaseImage },
  name: 'ProductGallery',
  props: {
    images: {
      type: Array as PropType<ProductImage[]>,
      required: true,
    },
  },
  setup() {
    const showFullImage = (index: number) => {
      console.log('ToDo - open lightbox action', index)
    }

    return {
      showFullImage,
    };
  },
});
</script>

<style lang="scss" src="./ProductGallery.scss" />
