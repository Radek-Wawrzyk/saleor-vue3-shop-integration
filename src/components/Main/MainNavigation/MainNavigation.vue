<template>
  <nav class="main-navigation">
    <ul class="list">
      <li
        class="list-item"
        v-for="link in megaMenu"
        :key="link.id"
        @mouseenter="isActive = true"
        @mouseleave="isActive = false"
      >
        <h2 class="list-item--title">
          {{ link.name }}
        </h2>
        <div
          class="list-subcategory"
          :class="{ active: isActive }"
          v-if="true && link.subcategory"
        >
          <li
            class="list-subcategory__item"
            v-for="category in link.subcategory"
            :key="category.id"
          >
            <ul>
              <h3 class="list-subcategory__item-title">{{ category.name }}</h3>
              <li class="list-subcategory__item-sub" v-for="item in category.list" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </li>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { megaMenu } from './megamenu';

export default defineComponent({
  setup() {
    const isActive = ref(false);
    const submenuActiveId = (subMenuId: number) => {
      megaMenu.find((elem) => console.log(elem));
    };
    onMounted(() => {
      console.log();
    });
    return {
      megaMenu,
      submenuActiveId,
      onMounted,
      isActive,
    };
  },
});
</script>

<style lang="scss" src="./MainNavigation.scss" />
