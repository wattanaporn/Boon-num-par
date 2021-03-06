import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";
import { server } from "@/services/constants";
import router from "@/router";
import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    username: "",
    Routepath: "",
    BNP_ID: "",
    type_id: null,
    bnpdata:"",
    bnptypeID:null,
  },
  getters: {
    isLogin(state) {
      return state.isLogged;
    },
    username(state) {
      return state.username;
    },
    Route_path(state) {
      return state.Routepath;
    },
    Newpersonal_type_id(state) {
      return state.type_id;
    },
    Newpersonal_BNP_ID(state) {
      return state.BNP_ID;
    },
    BNP_DATA(state) {
      return state.bnpdata;
    },
    BNP_TYPE(state) {
      return state.bnptypeID;
    }
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogged = true;
    },
    SET_LOGGED_OUT(state) {
      state.isLogged = false;
    },
    SET_USERNAME(state, value) {
      state.username = value;
    },
    SET_ROUTE_PATH(state, route) {
      state.Routepath = route;
    },

    SET_type_id(state, type_id) {
      state.type_id = type_id;
    },

    SET_Edit_BNP_ID(state, ID) {
      state.BNP_ID = ID;
    },
    SET_DATA_BNP(state, databnp) {
      state.bnpdata = databnp;
    },
    SET_DATATYPE_BNP(state, bnptypeID) {
      state.bnptypeID = bnptypeID;
    }
  },
  actions: {
    inputRoutepath({ commit }, { RT }) {
      commit("SET_ROUTE_PATH", RT);
    },
    async doLogin({ commit, dispatch }, { username, password }) {
      let result = await api.login({ username, password });
      if (result == true) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
        router.push("HomeMainAdmin");
        window.location.reload();
      } else {
        //this.$swal("error", `Login ไม่สำเร็จ`, "error");
        // this.$swal.fire(
        //   "error",
        //   `Login ไม่สำเร็จ`,
        //   "error"
        // );
        alert("Login ไม่สำเร็จ");
        dispatch("doLogout", {});
      }
    },
    doLogout({ commit }) {
      api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    },
    restoreLogin({ commit }) {
      if (api.isLoggedIn() == true) {
        let username = localStorage.getItem(server.USERNAME);
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      }
    },
    doTypeCreate({ commit }, type_id) {
      commit("SET_type_id", type_id);
    },
    doEditBNPID({ commit }, BNP_ID) {
      commit("SET_Edit_BNP_ID", BNP_ID);
    },
    setBNPDATA({ commit }, databnp) {
      commit("SET_DATA_BNP", databnp);
    },
    setBNPDATATYPEID({ commit }, bnptypeID) {
      commit("SET_DATATYPE_BNP", bnptypeID);
    }
  },
  modules: {}
});
