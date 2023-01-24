<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain
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
    <AppMain />
    <AppFooter :list_footer="store.menu_footer"/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss'
</style>