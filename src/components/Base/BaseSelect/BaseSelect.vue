<template>
  <div
    class="base-select"
    :class="[
      error ? 'base-select--error' : false,
      disabled ? 'base-select--disabled': false,
    ]"
    ref="selectRef"
  >
    <button
      class="base-select__inner"
      @click="setSelect()"
      :aria-label="selectText"
      :title="selectText"
    >
      <p class="base-select__inner-text">
        {{ selectText }}
      </p>

      <svg
        class="base-select__inner-icon"
        :class="[
          isActive ? 'base-select__inner-icon--is-active' : false,
        ]"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width="24px"
        height="24px"
        fill="none"
      >
        <path
          stroke="currentColor"
          stroke-width="1.5"
          d="M18.966 8.476L12 15.443 5.033 8.476">
        </path>
      </svg>
    </button>

    <transition name="fade">
      <div
        class="base-select__error"
        aria-label="error"
        v-if="error"
      >
        {{ error }}
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <ul
        class="base-select-list"
        v-if="isActive"
      >
        <li
          class="base-select-list__option"
          v-for="option in options"
          :key="option.value"
        >
          <button
            class="base-select-list__button"
            :class="[
              isSelected(option) ? 'base-select-list__button--is-selected' : false,
              option.disabled ? 'base-select-list__button--is-disabled' : false,
            ]"
            @click="selectOption(option)"

          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, PropType, ref } from 'vue';

interface SelectOption {
  value: number|string|boolean,
  label: string,
  disabled?: boolean,
};

export default defineComponent({
  name: 'BaseSelect',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [Boolean, String, Number] as PropType<boolean|string|number>,
      required: false,
      default: () => false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: () => (false),
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: false,
      default: () => (''),
    },
    error: {
      type: String as PropType<string>,
      required: false,
      default: () => (null),
    },
  },
  setup(props, { emit }) {
    const isActive = ref<boolean>(false);
    const selectRef = ref<HTMLDivElement>();
    const selectText = computed(() => {
      const selected = props.options.find((option) => option.value === props.modelValue);
      return selected ? selected.label : props.label;
    });

    const setSelect = (status = !isActive.value) => {
      isActive.value = status;
    };
    const isSelected = (option:SelectOption) => {
      return option.value === props.modelValue;
    };
    const selectOption = (option:SelectOption) => {
      emit('update:modelValue', option.value);
      setSelect();
    }

    const handleOutsideClick = (event:Event) => {
      if (!selectRef?.value?.contains(event.target as Node)) {
        setSelect(false);
      }
    };

    onMounted(() => document.addEventListener('click', handleOutsideClick));
    onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick));

    return {
      isActive,
      isSelected,
      selectOption,
      selectText,
      selectRef,
      setSelect,
    };
  },
});
</script>

<style lang="scss" src="./BaseSelect.scss" />
