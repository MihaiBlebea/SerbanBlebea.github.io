<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import { Home, Navigation, Project, SocialButtons } from './components'

export default {
    name: 'app'
}
</script>

<style lang='css' scoped>

@import '../assets/css/css/app.css';

</style>

