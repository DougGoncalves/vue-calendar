import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import Firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize); 

Vue.config.productionTip = false

Firebase.initializeApp({
  apiKey: "AIzaSyAaxmV8vjNIlJQzrwap8S8YXkKL_8lJgZk",
  authDomain: "vue-calendar-7d86b.firebaseapp.com",
  databaseURL: "https://vue-calendar-7d86b.firebaseio.com",
  projectId: "vue-calendar-7d86b",
  storageBucket: "vue-calendar-7d86b.appspot.com",
  messagingSenderId: "126938893490",
  appId: "1:126938893490:web:593d25aa2e8dbce4200dab"
});

export const db = Firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
