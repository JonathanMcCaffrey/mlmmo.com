import Vue from "vue";
import Vuex from "vuex";
import { cardInfo } from "./cards/cards.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cardInfo,
  },
});
