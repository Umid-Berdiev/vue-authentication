import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    user: null,
  }),
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA(state) {
      // state.user = null;
      localStorage.removeItem("user");
      // axios.defaults.headers.common["Authorization"] = null;
      location.reload();
    },
  },
  actions: {
    async register({ commit }, credentials) {
      await axios
        .post("//localhost:3000/register", credentials)
        .then(({ data }) => commit("SET_USER_DATA", data));
    },
    async login({ commit }, credentials) {
      await axios
        .post("//localhost:3000/login", credentials)
        .then(({ data }) => commit("SET_USER_DATA", data));
    },
    async logout({ commit }) {
      // await axios.post("//localhost:3000/logout").then(() => commit())
      commit("CLEAR_USER_DATA");
    },
  },
  getters: {
    loggedIn: (state) => !!state.user,
  },
});
