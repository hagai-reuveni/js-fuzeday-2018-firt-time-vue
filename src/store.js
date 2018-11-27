import Vue from 'vue'
import Vuex from 'vuex'
import { client } from './services/shopify-client'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   cart: {
  //     namespaced: true
  //   }
  // },
  state: {
    products: [],
    currentProduct: null,
    cart: [],
  },
  mutations: {
    fetch(state, payload) {
      state.products = [...payload]
    },
    addToCart(state, payload) {
      state.cart = [...state.cart, payload]
    },
    removeFromCart(state, payload) {
      state.cart = state.cart.filter(p => p.id !== payload.id);
    }
  },
  actions: {
    fetch({ state, commit }, payload) {
      const promise = !payload ? client.product.fetchAll(150) : client.product.fetchQuery({ query: payload });
      promise.then(products => {
        commit('fetch', products.map(p => ({...p, defaultImage: p.images.length > 1 ? p.images[1] : p.images[0]})));
      })
    },
    addToCart({ state, commit }, payload) {
      commit('addToCart', payload);
    },
    removeFromCart({ state, commit }, payload) {
      commit('removeFromCart', payload);
    }
  },
  getters: {
    products: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id),
    isInCart: state => id => state.cart.find(product => product.id === id)
  }
})
