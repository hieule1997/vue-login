<template>
  <div class="hello">
    <notifications />
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
              <img src="../assets/img/img-01.png" alt="IMG">
            </div>

            <div class="login100-form validate-form">
              <span class="login100-form-title">
                Member Register
              </span>
              <div class="wrap-input100 validate-input">
                <input class="input100" type="text" name="email" placeholder="Tên đăng nhập" v-model="username">
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input">
                <input class="input100" type="password" name="pass" placeholder="Password" v-model="password">
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="wrap-input100 validate-input">
                <input class="input100" type="password" name="repass" placeholder="Repeart Password" v-model="repassword" >
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div class="clearfix"></div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" v-on:click = "Register">
                  Register
                </button>
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
import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications)
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    Register: function () {
      if (this.password !== this.repassword) {
        this.$notify({
          type: 'error',
          text: 'Password phải trùng nhau'
        })
      } else {
        let data = JSON.stringify({
          username: this.username,
          password: this.password
        })
        axios
          .post('/registration', data, {
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
}
</script>
<style scoped>
</style>
