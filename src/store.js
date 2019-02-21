import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     coins: []
  },
  getters: {
    coins(state) {
     return state.coins
    }
  },
  mutations: {
    SET_COINS: (state, payloads) => {
      state.coins = payloads
    }
  },
  actions: {
    getCoins({commit}){
      axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5')
      .then(response => {
        const coin = response.data;
        commit('SET_COINS', coin);
      })
      .catch(error => {
        console.log(error);
      });
    }
    
  }
});

