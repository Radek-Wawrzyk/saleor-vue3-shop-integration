<template>
  <nav class="main-navigation" @mouseleave="hideMenu()">
    <div class="container">
      <ul class="main-navigation__menu">
        <li
          class="main-navigation__menu-item"
          v-for="link in megaMenu"
          :key="link.id"
          @mouseenter="showMenu(link)"
        >
          <router-link
            to="/"
            :title="link.name"
            :aria-label="link.name"
            class="main-navigation__menu-link"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <transition name="fade" mode="out-in">
      <nav
        class="main-navigation-bottom"
        v-if="subMenu && subMenu.length && isActive"
        :key="Math.random()"
      >
        <div
          class="main-navigation-bottom__menu"
          v-for="category in subMenu"
          :key="category.id"
        >
          <p class="main-navigation-bottom__menu-heading">
            {{ category.name }}
          </p>

          <ul class="main-navigation-bottom__list">
            <li
              class="main-navigation-bottom__menu-item"
              v-for="subCategory in category.subcategory"
              :key="subCategory.name"
            >
              {{ subCategory.name }}
            </li>
          </ul>
        </div>

        <ul class="main-navigation-bottom__menu">
          <li
            class="main-navigation-bottom__menu-item"
            v-for="category in subMenu"
            :key="category.id"
          >
            {{ category.name }}
          </li>
        </ul>
      </nav>
    </transition>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { megaMenu } from './megamenu';

interface MegaMenuItem {
  id: number,
  name: string,
  path: string,
  subcategory?: MegaMenuItem[],
}

export default defineComponent({
  setup() {
    const isActive = ref(false);
    const subMenu = ref<MegaMenuItem[]>([]);

    const showMenu = (category:MegaMenuItem) => {
      subMenu.value = category.subcategory;
      isActive.value = true;
    };

    const hideMenu = () => {
      subMenu.value = [];
      isActive.value = false;
    };

    return {
      megaMenu,
      hideMenu,
      showMenu,
      isActive,
      subMenu,
    };
  },
});
</script>

<style lang="scss" src="./MainNavigation.scss" />
