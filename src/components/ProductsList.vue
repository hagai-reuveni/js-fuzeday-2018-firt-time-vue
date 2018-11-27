<template>
  <div>
    <section class="css-grid">
			<article v-for="product in products" style="position: relative;" :key="product.id">
				<router-link :to="`/product/${product.id}`" class="css-grid__link" href="#">
						<figure class="absolute-bg"
										:style="'background-image: url('+ (product.images[1] || product.images[0]).src + ');'">

						</figure>
				</router-link>
				<div class="item-bg"></div>
			</article>
    </section>
    <!--<ul>-->
    <!--<li v-for="product in products">{{ product.title }}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["products"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
// Variables / Config
//
$mq-xsmall: 640px;
$mq-small: 768px;
$mq-med: 1024px;
$mq-large: 1440px;
$mq-xlarge: 1840px;

//
// Base
//
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
}

article a {
	opacity: 0.8;
	z-index: 1;
}


.item-bg {
	position: absolute; width: 100%; height: 100%; top:0; left: 0;
	background-image: url(//res-format-story.playbuzz.com/images/patterns/white/pattern_01.png);
}

//
// Media
//
figure {
  margin: 0;
}

.absolute-bg {
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

//
// Components
//
.css-grid {
  display: block;

  &:after {
    content: "";

    display: table;
    clear: both;
  }

  @supports (display: grid) {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 1fr;
    width: 100%;

    &:after {
      content: none;
    }

    @media (min-width: $mq-xsmall) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $mq-med) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: $mq-xlarge) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  & > article {
    float: left;
    width: 100%;

    @media (min-width: $mq-xsmall) {
      width: 50%;
    }

    @media (min-width: $mq-xsmall) and (max-width: ($mq-small - 1px)) {
      &:nth-child(17n + 1) {
        width: 100%;
      }
    }

    @media (min-width: $mq-med) {
      width: 25%;

      &:nth-child(34n + 1) {
        width: 50%;
      }
    }

    @media (min-width: $mq-med) and (max-width: ($mq-xlarge - 1px)) {
      &:nth-child(34n + 20) {
        float: right;
        width: 50%;
      }
    }

    @media (min-width: $mq-xlarge) {
      width: 20%;

      &:nth-child(34n + 1) {
        width: 40%;
      }

      &:nth-child(34n + 21) {
        float: right;
        width: 40%;
      }
    }

    @supports (display: grid) {
      float: none;
      width: auto;

      @media (min-width: $mq-xsmall) and (max-width: ($mq-small - 1px)) {
        &:nth-child(17n + 1) {
          grid-column-end: span 2;
          grid-row-end: span 2;
        }
      }

      @media (min-width: $mq-med) {
        &:nth-child(34n + 1) {
          grid-column-end: span 2;
          grid-row-end: span 2;
          width: auto;
        }
      }

      @media (min-width: $mq-med) and (max-width: ($mq-xlarge - 1px)) {
        &:nth-child(34n + 20) {
          grid-column-start: 3;
          grid-column-end: span 2;
          grid-row-end: span 2;
          width: auto;
        }
      }

      @media (min-width: $mq-xlarge) {
        &:nth-child(34n + 1) {
          width: auto;
        }

        &:nth-child(34n + 21) {
          grid-column-start: 4;
          grid-column-end: span 2;
          grid-row-end: span 2;
          width: auto;
        }
      }
    }
  }

  &__link {
    position: relative;

    display: block;

    overflow: hidden;

    &:before,
    &:after {
      content: "";
    }

    &:before {
      display: block;
      padding-top: 100%;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;

      height: 100%;
      width: 100%;

      background-color: #080808;
      opacity: 0;
      transition: opacity 300ms ease;
    }
    &:hover {
      &:after {
        opacity: 0.3;
      }

      .absolute-bg {
        transform: scale(1.1);
      }
    }
  }
}
</style>
