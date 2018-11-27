<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
          <img src="../assets/robert.png"/>
      </router-link>
    </div>
    <div style="flex-grow:3;">
      <Search :onSearch="onSearchChange"/>
    </div>
    <div class="actions">
      <img src="../assets/shopping.png"/>
      <img src="../assets/qustion.png"/>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  display: flex; 
  flex-direction: row;
  align-items: center;
  font-size: 1.8em;
  line-height: 1.8em;
  padding: 0.1em 1em;
  border-bottom: 1px solid #eee;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 75px;
  margin: 81px 10%;
  border-radius: 5px;

  .logo {
    display: flex;
    padding-right: 10px; 
  }

  a {
    color: #2c3e50;
    &.router-link-exact-active,
    &.active {
      color: #fe885f;
    }
  }
  .actions {
    display: flex;
    flex-grow:1;
    align-items: center;
    img {
    height: 50px;
    cursor: pointer;
    &:nth-child(2) {
      height: 40px;
    }
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
