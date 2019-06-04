<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style src="./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet"></style>
<style src="./assets/css/main.css" rel="stylesheet"></style>
<style src="./assets/css/util.css" rel="stylesheet"></style>

<script>
import utils from './utils'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
var jwt = utils.get_token()
export default {
  name: 'App',
  data () {
    return {
      isLogin: false,
      loading: false
    }
  },
  created () {
    if (this.$router.resolve(location).href.startsWith('/login')) {
      this.isLogin = true
    } else if (!jwt) {
      utils.logout('/login')
    }
  }
}
</script>

<style>
</style>
