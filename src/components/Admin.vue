<template>
  <div class="hello">
    <notifications />
    <div>
      <ul v-for="item in items">
        <li>{{item.username}}</li>
      </ul>
    </div>
    <div>
      <button v-on:click = "getSecret" class="login100-form-btn">authenticate</button>
    </div>
    <div>
      <span>{{ secret }}</span>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
// import utils from '../utils'
import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications)

export default {
  name: 'Admin',
  data () {
    return {
      items: [],
      secret: ''
    }
  },
  created () {
    this.getAll()
  },
  methods: {
    getAll: function () {
      axios
        .get('/users', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.items = response.data.users
        })
    },
    getSecret: function () {
      axios
        .get('/secret', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.secret = response.data.answer
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
