<template>
	<div class="product" v-if="item">
    <div class="image">
      <div class="img" :style="'background-image: url('+ item.defaultImage.src + ');'"/>
    </div>
    <div class="details">
      <h1>{{ item.title }}</h1>
      <h4>{{ item.vendor }}</h4>
      <div class="description" v-html="item.descriptionHtml"/>
      <button @click="addToCart"><span>Add to Cart</span><span class="price">{{item.variants[0].price}}</span></button>
    </div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'ProductDetails',
  computed: {
    item() {
      return this.$store.getters.getProductById(this.$route.params.id);
    }
  },
  methods: {
    addToCart() {
      return this.$store.dispatch('addToCart', this.item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product {
    display: flex;
    font-family: verdana;

    .image {
      flex: 1;
      position: relative;

      .img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;

        height: 100%;
        width: 100%;

        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        transition: transform 300ms ease;
      }
    }

    .details {
      flex: 0.8;
      margin: 20px;

      h1 {
        font-size: 22px;
      }

      h4 {
        font-size:18px;
      }

      .description {
        font-size: 14px;
        margin: 10px 0 30px;
      }

      button {
        display: flex;
        height: 50px;
        width: 100%;
        padding: 10px 20px;
        justify-content: space-between;
      }

      .price {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
</style>
