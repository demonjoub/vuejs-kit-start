import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sports from "./modules/sports";
import foods from "./modules/foods";

Vue.use(Vuex, axios);
export const store = new Vuex.Store({
  modules: {
    sports,
    foods
  }
});

