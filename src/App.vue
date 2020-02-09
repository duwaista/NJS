<template>
  <div id="app">
    <div id="nav">
      <router-link to="/sign-in">Sign in</router-link> |
      <router-link to="/sign-up/">Sign up</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  text-align: center
}
</style>
