<template>
  <div id="app" v-bind:class="{ inProdact: inProdact }">
    <Navbar :onSearch="onSearch"/>
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
    onSearch(searchValue) {
      this.fetch(searchValue);
    },
    ...rootActions(["fetch"])
	},
	computed: {
    inProdact() {
			return (this.$route.params.id ? true : false);
		}
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
	&.inProdact{
		.navbar{
			display: none;
		}
	}
}
</style>