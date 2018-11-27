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
export default {
	name: 'Product',
	props: {
		item: {
      type: Object,
      default: function() {
        return {
          id: 1,
          title: 'hello',
          description: 'world',
          images: [{
            src: 'https:\/\/cdn.shopify.com\/s\/files\/1\/0049\/5186\/7490\/products\/product-image-834060664.jpg?v=1541239841',
          }]
        }
      }
    }
	},
  mounted: function() {
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
