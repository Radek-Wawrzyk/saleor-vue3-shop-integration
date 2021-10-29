<template>
  <div class="forms-page">
    <form class="container forms-page__form" @submit.prevent="onSubmit">
      <div class="forms-page__field forms-page__field--center">
        {{ meta }}
      </div>

      <div class="forms-page__field forms-page__field--half">
        <base-input
          v-model="email"
          :error="emailError"
          label="Email"
        />
      </div>

      <div class="forms-page__field forms-page__field--half">
        <base-input
          v-model="password"
          :error="passwordError"
          label="Password"
          type="password"
        />
      </div>

      <div class="forms-page__field forms-page__field--half">
        <base-checkbox
          v-model="agreement"
          name="Agreement"
          :error="agreementError"
        >
          Accept it please
        </base-checkbox>
      </div>

      <div class="forms-page__field forms-page__field--half">
        <base-checkbox
          v-model="kidney"
          name="Agreement"
          :error="kidneyError"
        >
          Kidney agreement
        </base-checkbox>
      </div>

      <base-button
        class="forms-page__submit"
        type="primary-dark"
        :loading="loading"
        native-type="submit"
        size="large"
      >
        Submit
      </base-button>
    </form>
  </div>
</template>

<script lang="ts">
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref, defineComponent } from 'vue';

import BaseInput from '@/components/Base/BaseInput/BaseInput.vue';
import BaseButton from '@/components/Base/BaseButton/BaseButton.vue';
import BaseCheckbox from '@/components/Base/BaseCheckbox/BaseCheckbox.vue';

export default defineComponent({
  components: { BaseInput, BaseButton, BaseCheckbox },
  setup() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      agreement: yup.bool().oneOf([true], 'The terms and conditions must be accepted.'),
      kidney: yup.bool().oneOf([true], 'We need your kidney (if you die hehe).'),
    });

    const formValues = {
      email: '',
      password: '',
      agreement: false,
      kidney: false,
    };

    const { meta, values, handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: formValues,
    });

    const loading = ref(false);
    const makeFakeRequest = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    };

    const onSubmit = handleSubmit(async (payload) => {
      loading.value = true;
      console.log('SUCCESS', payload);

      try {
        await makeFakeRequest();
        loading.value = false;
      } catch (err) {
        console.log(err);
      }
    });

    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');
    const { value: agreement, errorMessage: agreementError } = useField('agreement');
    const { value: kidney, errorMessage: kidneyError } = useField('kidney');

    return {
      email,
      emailError,
      password,
      passwordError,
      meta,
      values,
      onSubmit,
      loading,
      agreement,
      agreementError,
      kidney,
      kidneyError,
    };
  },
});
</script>

<style lang="scss" src="./Forms.scss" />
