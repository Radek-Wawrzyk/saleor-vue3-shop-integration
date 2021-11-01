<template>
  <nav class="main-navigation">
    <ul class="list">
      <li class="list-item" v-for="link in megaMenu" :key="link.id" @mouseover="showSubcategories">
        {{ link.name }}

        <ul class="list-subcategory">
          <li
            class="list-subcategory__item"
            v-for="category in link.subcategory"
            :key="category.id"
          >
            <h3 class="list-subcategory__item-title">{{ category.name }}</h3>
            <ul>
              <li class="list-subcategory__item-sub" v-for="item in category.list" :key="item">
                {{ item.name }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { megaMenu } from './megamenu';

export default defineComponent({
  setup() {
    const showSubcategories = () => {
      console.log('Menu was hovered');
    };
    onMounted(() => {
      console.log(megaMenu);
    });
    return { megaMenu, showSubcategories, onMounted };
  },
});
</script>

<style lang="scss" src="./MainNavigation.scss" />
