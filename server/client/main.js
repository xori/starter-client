import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

////
// Some Test Componenets
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})
var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
////

var router = new VueRouter();
router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})

var AppShell = Vue.extend({
  components: { App }
})
router.start(AppShell, 'body')
