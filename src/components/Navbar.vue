<template>
  <div class="navbar">
    <router-link to="/">
      <font-awesome-icon icon="home"/>
    </router-link>
    <Search :onSearch="onSearchChange"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  font-size: 1.8em;
  line-height: 1.8em;
  padding: 0.1em 1em;
  border-bottom: 1px solid #eee;
  background-color: rgba(34, 34, 64, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 75px;

  .logo {
    width: 64px;
    padding: 0 10px;
    vertical-align: middle;
  }

  a {
    color: #2c3e50;
    &.router-link-exact-active,
    &.active {
      color: #fe885f;
    }
  }
}
</style>
<script>
import Search from "@/components/Search";
export default {
  components: { Search },
  props: {
    onSearch: null
  },
  methods: {
    onSearchChange(value) {
      this.onSearch && this.onSearch(value);
    }
  }
};
</script>
