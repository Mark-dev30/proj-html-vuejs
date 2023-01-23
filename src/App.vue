<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }, data() {
    return {
      menu: ['Home', 'About Me', 'Testimonials', 'My Blog', 'Meetups', 'Shop', 'Contact Me', ''],
    }
  },

}
</script>
<template lang="">
  <div class="container-page">
    <AppHeader :list="menu"/>
    <AppFooter />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss'
</style>