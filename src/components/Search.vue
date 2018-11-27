<template>
  <div class="container">
    <font-awesome-icon icon="search"/>
    <input class="searchbox" type="search" v-model="searchValue">
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0.2em 2em 0.2em 2em;
  display: inline-block;
  min-height: 60px;
  min-width: 300px;
  .searchbox {
    display: inline-block;
    margin-left: 0.2em;
    min-height: 80%;
    font-size: 1em;
    line-height: 1em;
    padding: 0;
    -webkit-appearance: textfield;
  }
}
</style>

<script>
export default {
  name: "Search",
  props: {
    value: "",
    onSearch: null
  },
  data: function() {
    return {
      searchValue: ""
    };
  },
  watch: {
    searchValue() {
      this.onSearch && this.onSearch(this.searchValue);
    }
  }
};
</script>
