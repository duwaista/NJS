<template>
  <div id="app">
    <form @submit.prevent="login" class="loginForm" autocomplete="none">
      <br>
      <input type="email" v-model="email" placeholder="Enter your email" autocomplete="false">
      <br>
      <input type="password" v-model="password" placeholder="Enter your password" autocomplete="false">
      <br>
      <button type="submit" v-if="email!='' && password!=''">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {

    }
  }
  }
</script>

<style scoped lang="scss">
input {
    width: 300px;
    padding: 12px;
  }
</style>
