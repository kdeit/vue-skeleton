import Vue from "vue";
import axios from "axios";
import "es6-promise/auto";
import "babel-polyfill";
import mainForm from "./vue/main-form.vue";
import store from "./vue/store";

Vue.prototype.$axios = axios;
require("./sass/_app.scss");


const app = new Vue({
  el: "#app",
  
  components: {mainForm},
  store,
  data: function() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
  
});
