<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
  // @import { mapGetters, mapActions } from 'vuex'
  import Navbar from './components/layout/Navbar.vue'
  import Footer from './components/layout/Footer.vue'
  // import { SnotifyPosition, SnotifyStyle } from 'vue-snotify'

export default {
    name: 'app',
    mounted () {
      this.$Progress.finish()
    },
    created () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    components: {
      Navbar,
      Footer
    },
    data () {
      return {
      }
    }
}
</script>

<style lang="scss">
  @import '~animate.css';
  .animated {
    animation-duration: .377s;
  }
  @import url('//fonts.googleapis.com/earlyaccess/cwtexyen.css');
  @import '~bulma/sass/utilities/_all';
  $family-primary: 'PinFeng TC', 'cwTexYen', 'Avenir', Helvetica, Arial, sans-serif;
  @import '~bulma';
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';
  @import '~vue-snotify/styles/material';
  @import './components/layout/normalize';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2ce28a;
  margin-top: 60px;
}
</style>
