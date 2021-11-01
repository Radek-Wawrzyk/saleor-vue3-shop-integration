<template>
  <nav class="main-navigation">
    <ul class="main-navigation__list">
      <li
        class="main-navigation__list-item"
        v-for="item in megaMenu"
        :key="item.id"
        @mouseenter="submenuActiveId(item.id)"
      >
        <h2 class="main-navigation__list-item-title">
          {{ item.name }}
        </h2>
        <div class="main-navigation-subcategory" :class="{ active: isActive }" v-if="true && item.subcategory">
          <li class="main-navigation-subcategory__item" v-for="category in isSubmenu" :key="category.id">
            <ul>
              <h3 class="main-navigation-subcategory__item-title">{{ category.name }}</h3>
              <li class="main-navigation-subcategory__item-sub" v-for="item in category.list" :key="item.id">
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

    interface List {
      name: string;
      path: string;
    }
    interface Subcategories {
      id: number;
      name: string;
      list: Array<List>;
    }

    const isSubmenu = ref<Array<Subcategories>>([]);

    const submenuActiveId = (subMenuId: number) => {
      const sub = megaMenu.find((elem) => subMenuId === elem.id);
      const subCategory = sub?.subcategory;

    //   isSubmenu.value.push(subCategory);
    };
    onMounted(() => {
      console.log();
    });
    return {
      megaMenu,
      submenuActiveId,
      isActive,
      isSubmenu,
    };
  },
});
</script>

<style lang="scss" src="./MainNavigation.scss" />
