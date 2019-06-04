<template>
  <div class="hello">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src="../assets/img/img-01.png" alt="IMG">
            </div>

            <div class="login100-form validate-form">
              <span class="login100-form-title">
                Member Login
              </span>
              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="email" placeholder="Tên đăng nhập" v-model="username">
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate = "Password is required">
                <input class="input100" type="password" name="pass" placeholder="Password" v-model="password" v-on:keyup.enter="Login">
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" v-on:click = "Login">
                  Login
                </button>
              </div>
              <div class="text-center p-t-12">
                <span class="txt1">
                  Forgot
                </span>
                <a class="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div class="text-center p-t-136">
                <router-link to="/register" class="txt2">
                  Create your Account
                  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import utils from '../utils'
// import Vue from 'vue'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    Login: function () {
      let data = JSON.stringify({
        username: this.username,
        password: this.password
      })
      axios
        .post('/login', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          utils.set_token(response.data.access_token)
          location.href = '/admin'
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
