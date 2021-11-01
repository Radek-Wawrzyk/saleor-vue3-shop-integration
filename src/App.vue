<template>
  <main-navigation/>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainNavigation from '@/components/Main/MainNavigation/MainNavigation.vue';

export default defineComponent({
  components: {
    MainNavigation,
  },
});
</script>
