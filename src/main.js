import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import messagePlugin from '@/utils/message.plugin';
import dateFilter from "./filters/date.filter";
import "materialize-css/dist/js/materialize.min";

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyC7uWLra_cboBqgvALHYKqhvPrFLgqgGJU",
  authDomain: "vue-crm-44caa.firebaseapp.com",
  databaseURL: "https://vue-crm-44caa.firebaseio.com",
  projectId: "vue-crm-44caa",
  storageBucket: "vue-crm-44caa.appspot.com",
  messagingSenderId: "592791975018",
  appId: "1:592791975018:web:0347d2b74a7dfdf69c8613",
  measurementId: "G-K3ZRMBTFML"
})


firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});


