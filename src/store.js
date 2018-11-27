import Vue from 'vue'
import Vuex from 'vuex';
import { client } from './services/shopify-client';


Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   cart: {
  //     namespaced: true
  //   }
  // },
  state: {
    products: [],
    currentProduct: null
  },
  mutations: {
    fetch(state, payload) {
      state.products = [...payload];
      console.log('state.products', state.products);
    }
  },
  actions: {
    fetch({ state, commit }, payload) {
      client.product.fetchAll()
                .then((products) => {
                    // console.log(products)
                    commit('fetch', products);
                });
    },
  },
  getters: {
    currentProduct: (state) =>  state.products.find(product => product.id === state.currentProduct),
    products: state => state.products
  }
})
