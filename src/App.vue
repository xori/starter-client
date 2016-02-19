<template>
  <div id="app">
    <logo></logo>
    <h1><i class="material-icons">flash_on</i> {{ msg }} <i class="material-icons">flash_on</i></h1>
    <p>
      <!-- use v-link directive for navigation. -->
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
    </p>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Unrest from 'unrest'

var db = new Unrest('api');

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="less">
body {
  font-family: Helvetica, sans-serif;
  h1 {
    font-size: 30px;
  }
}
</style>
