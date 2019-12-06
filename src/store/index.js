import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },

  actions: {
    GET_LEDGER({ commit }) {
      axios.get("/photos/?_limit=50").then(response => {
        let posts = response.data;
        commit("SET_LEDGER", posts);
      });
    }
  },

  mutations: {
    SET_LEDGER(state, posts) {
      state.posts = posts;
    }
  }
});
