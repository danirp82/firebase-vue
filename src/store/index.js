import Vue from "vue";
import Vuex from "vuex";

import messages from "./messages";
import rooms from "./rooms";
import user from "./user";
import utils from "./utils";

import { auth } from "../firebase.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    setLoading(state, loading) {
      state.isLoading = loading;
    }
  },
  actions: {
    checkAuth({ commit, dispatch }) {
      auth.onAuthStateChanged(async function(user) {
        if (user) {
          commit("user/setUser", user);
          try {
            await dispatch("user/getMeta");
            await dispatch("rooms/getRooms");
            await dispatch("messages/getMessages");
          } catch (error) {
            console.error(error);
            this.$toast.error(error);
          }
        } else {
          commit("user/setMeta", {});
          commit("user/setUserListener", () => {});

          commit("rooms/setRooms", []);
          commit("rooms/setRoomsListener", null);

          commit("messages/setMessages", []);
          commit("messages/setMessagesListener", null);

          commit("user/setUser", null);
        }
      });
    }
  },
  modules: {
    messages,
    rooms,
    user,
    utils
  }
});

export default store;

store.dispatch("checkAuth");
