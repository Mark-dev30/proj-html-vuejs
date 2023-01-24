<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }, data() {
    return {
      store

    }
  },

}
</script>
<template lang="">
  <div class="container-page">
    <AppHeader :list="store.menu"/>
    <AppFooter :list_footer="store.menu_footer"/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss'
</style>