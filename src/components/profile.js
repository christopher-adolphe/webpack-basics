import Vue from 'vue';

export default Vue.component('Profil', {
  data: () => ({
    name: 'Christopher'
  }),
  template: `
    <div class="container">
      <img src="./images/avatar.png" class="avatar" alt="Avatar">
      <h1>Webpack beyond the basics! {{ name }}</h1>
    </div>
  `
});
