<template>
  <div id="nav" style="display:flex; justify-content: center; height">
    <router-link to="/">Home</router-link> |
    <router-link to="/style-guide">Style Guide</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
//TEMPORARY STYLES
#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color;
  height: 4rem;

  a {
    padding: 1rem;
    color: $primary;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
