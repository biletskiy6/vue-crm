import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';
import userInfo from "./userInfo";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
       state.error = error;
    }
  },
  actions: {
    async fetchCurrency() {
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_FIXER_API_KEY}&symbols=UAH,USD`)
      return await res.json();
    }
  },
  getters: {
    error(state) {
      return state.error;
    }
  },
  modules: {
    auth,
    userInfo
  }
})
