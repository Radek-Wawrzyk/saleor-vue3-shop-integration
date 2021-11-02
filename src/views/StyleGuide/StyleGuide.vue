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
            :error="nameError"
          />

          <base-input
            v-model="fullname"
            name="name"
            label="Error"
            :error="fullnameError"
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
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseInput from '@/components/Base/BaseInput/BaseInput.vue';

export default {
  name: 'StyleGuide',
  components: { BaseButton, BaseInput },
  setup() {
    const isButtonLoading = ref(false);

    const schema = yup.object({
      name: yup.string().required().min(3),
      fullname: yup.string().required().min(3),
    });

    useForm({ validationSchema: schema });

    const { value: name, errorMessage: nameError } = useField('name');
    const { value: fullname, errorMessage: fullnameError } = useField('fullname');

    return {
      isButtonLoading,
      name,
      fullname,
      nameError,
      fullnameError,
    };
  },
};
</script>

<style lang="scss" src="./StyleGuide.scss" />
