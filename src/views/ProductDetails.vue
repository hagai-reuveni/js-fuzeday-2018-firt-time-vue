<template>
	<div class="product" v-if="item">
    <div class="image">
      <img :src="item.images[0].src" />
    </div>
    <div class="details">
      <h1>{{ item.title }}</h1>
      <h4>{{ item.vendor }}</h4>
      <div class="description" v-html="item.descriptionHtml"/>
    </div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: 'ProductDetails',
  computed: {
    item() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    display: flex;

    .image {
      flex: 1;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .details {
      flex: 0.8;

      h1 {
        font-size: 22px;
      }

      h4 {
        font-size:18px;
      }

      description {
        font-size: 14px;
      }
    }
  }
</style>
