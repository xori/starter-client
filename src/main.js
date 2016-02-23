import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

// //
// Some Test Componenets
var Foo = Vue.extend({
  template: '<p>This is contact!</p>'
});
var Bar = Vue.extend({
  template: '<p>This is about!</p>'
});
// //

var router = new VueRouter();
router.map({
  '/contact': {
    component: Foo
  },
  '/about': {
    component: Bar
  }
});

var AppShell = Vue.extend({
  components: { App }
});
router.start(AppShell, 'body');
