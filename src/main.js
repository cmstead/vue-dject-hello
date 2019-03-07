// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vueContainer from './vue-container';

const Vue = vueContainer.build('Vue');
const App = vueContainer.build('App');
const router = vueContainer.build('router');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

export default {
  name: 'Main',
  value: {}
};