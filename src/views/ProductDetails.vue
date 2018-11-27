<template>
	<div class="product">
    <div class="image">
      <img :src="item.images[0].src" />
    </div>
    <div class="details">
      <h1>{{ item.title }}</h1>
    </div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'ProductDetails',
  data: function () {
      return {
          item: {}
      }
  },
  computed: {
    ...mapGetters(['getProductById'])
  },
  mounted: function() {
    this.item = this.getProductById(this.$route.params.id);
    console.log(this.item);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    .image {
      height: 200px;
      width: 200px;
      border: 1px solid black;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
