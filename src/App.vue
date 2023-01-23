<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }

}
</script>
<template lang="">
  <div class="container-page">
    <AppHeader />
    <AppFooter />

  </div>
</template>
<style lang="scss">
@use './styles/generals.scss'
</style>