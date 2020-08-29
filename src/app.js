import Vue from 'vue';
import App from './App.vue';
import Profil from './components/profile'

new Vue({
  el: '#app-root',
  components: { Profil },
  render: h => h(App)
});
