import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD6De_PPXJWzgk6biXU04d5pRc0ueqbEHI",
  authDomain: "vuetest-f5c04.firebaseapp.com",
  databaseURL: "https://vuetest-f5c04.firebaseio.com",
  projectId: "vuetest-f5c04",
  storageBucket: "vuetest-f5c04.appspot.com",
  messagingSenderId: "795924705496"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  jQuery,
  render: h => h(App)
}).$mount('#app')


