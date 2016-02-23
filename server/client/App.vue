<template>
  <div id="app">
    <my-header title="Home Page" subtitle="Subtitle"></my-header>
    <div class="container">
      <logo></logo>
      <h1><i class="material-icons">flash_on</i> {{ msg }} <i class="material-icons">flash_on</i></h1>
      <p>
        <!-- use v-link directive for navigation. -->
        <a class="btn btn-primary" v-link="{ path: '/contact' }">Go to Contact</a>
        <a class="btn btn-default" v-link="{ path: '/about' }">Go to About</a>
      </p>
      <!-- route outlet -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import MyHeader from './components/Header.vue'
import Unrest from 'unrest'

var db = new Unrest('api');

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: {
    Logo, MyHeader
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
