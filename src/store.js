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
    currentProduct: null
  },
  mutations: {
    fetch(state, payload) {
      state.products = [...payload]
    }
  },
  actions: {
    fetch({ state, commit }, payload) {
      if (!payload) {
        client.product.fetchAll(150).then(products => {
          commit('fetch', products)
        })
      } else {
        client.product.fetchQuery({ query: payload }).then(products => {
          commit('fetch', products)
        })
      }
    }
  },
  getters: {
    products: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id)
  }
})
