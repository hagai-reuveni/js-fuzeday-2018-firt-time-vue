<template>
  <div id="app">
    <Navbar/>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import { mapActions as rootActions, MapperWithNamespace } from "vuex";

// const {mapActions} = MapperWithNamespace('cart');

export default {
  components: {
    Navbar
  },
  methods: {
    ...rootActions(["fetch"])
  },
  mounted() {
    this.fetch();
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main-container {
  padding-top: 81px;
}
</style>