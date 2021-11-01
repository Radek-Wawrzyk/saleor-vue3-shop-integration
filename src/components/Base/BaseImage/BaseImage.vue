<template>
  <transition name="fade" mode="out-in">
    <img
      :class="[
        isLoaded ? 'base-image--loaded' : false,
      ]"
      :data-src="src"
      :src="lazy && loadedSrc ? loadedSrc : null"
      :alt="lazy && isLoaded ? alt : null"
      :key="isLoaded"
      ref="imageRef"
      class="base-image"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';

export default defineComponent({
  name: 'BaseImage',
  props: {
    src: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    alt: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    lazy: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => (false),
    },
    options: {
      type: Object as PropType<object>,
      required: false,
      default: () => ({
        root: document,
        rootMargin: '0px',
      }),
    },
  },
  setup(props) {
    const imageRef = ref();
    const isLoaded = ref(false);
    const loadedSrc = ref();

    const imageObserver = (entries:any, observer:any) => {
      const entry = entries[0];

      if (entry?.isIntersecting) {
        isLoaded.value = true;
        loadedSrc.value = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    };
    const observer = new IntersectionObserver(imageObserver, props.options);


    onMounted(() => {
      if (props.lazy && imageRef.value) {
        observer.observe(imageRef.value);
      }
    });

    return {
      imageRef,
      loadedSrc,
      isLoaded,
    };
  }
});
</script>
