<template>
  <div class="style-guide">
    <div class="container">
      <section class="style-guide__section">
        <h2 class="style-guide__section-heading">
          Buttons
        </h2>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton type="primary-dark">
            Primary Button Dark
          </BaseButton>

          <BaseButton type="primary-light">
            Primary Button Light
          </BaseButton>

          <BaseButton disabled>
            Primary Button Disabled
          </BaseButton>
        </div>

        <h2 class="style-guide__section-heading">
          Loading buttons
        </h2>

        <div class="style-guide__content style-guide__content--flex-grid">
          <BaseButton type="primary-dark" @click="isButtonLoading = !isButtonLoading">
            Toggle loading
          </BaseButton>

          <BaseButton :loading="isButtonLoading">
            Primary Button
          </BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';

export default {
  name: 'StyleGuide',
  components: { BaseButton },
  setup() {
    const isButtonLoading = ref(false);

    return {
      isButtonLoading,
    };
  },
};
</script>

<style lang="scss" src="./StyleGuide.scss" />
