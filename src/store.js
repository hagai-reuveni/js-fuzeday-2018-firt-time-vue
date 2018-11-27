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
      const promise = !payload ? client.product.fetchAll(150) : client.product.fetchQuery({ query: payload });
      promise.then(products => {
        commit('fetch', products.map(p => ({...p, defaultImage: p.images.length > 1 ? p.images[1] : p.images[0]})));
      })
    }
  },
  getters: {
    products: state => state.products,
    getProductById: state => id => state.products.find(product => product.id === id)
  }
})
