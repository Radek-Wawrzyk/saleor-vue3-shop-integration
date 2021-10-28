<template>
  <div class="style-guide">
    <section class="style-guide__section style-guide__section--accent">
      <div class="container">
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
      </div>
    </section>

    <section class="style-guide__section">
      <div class="container">
        <h2 class="style-guide__section-heading">
          Inputs
        </h2>

        <div class="style-guide__content style-guide__content--flex-grid">
          <base-input
            v-model="name"
            name="name"
            label="Name"
          />

          <base-input
            v-model="fullname"
            name="name"
            label="Error"
            :error="fullname.length <= 0 ? 'The field is required' : null"
          />

          <base-input
            disabled
            name="Disabled"
            label="Disabled"
          />
        </div>

        <div class="style-guide__content style-guide__content--flex-grid">
          <span>
            {{ name }}
          </span>

          <span>
            {{ fullname }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseInput from '@/components/Base/BaseInput/BaseInput.vue';

export default {
  name: 'StyleGuide',
  components: { BaseButton, BaseInput },
  setup() {
    const isButtonLoading = ref(false);
    const name = ref('');
    const fullname = ref('');

    return {
      isButtonLoading,
      name,
      fullname,
    };
  },
};
</script>

<style lang="scss" src="./StyleGuide.scss" />
