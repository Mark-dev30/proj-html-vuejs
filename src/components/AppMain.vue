<script>
import Critics from './Critics.vue'
import Author from './Author.vue'
import Sitesbook from './Sitesbook.vue'
import Audiobook from './Audiobook.vue'
export default {
    components: {
        Author,
        Sitesbook,
        Audiobook,
        Critics
    }
}
</script>
<template lang="">
    <Author />
    <Sitesbook />
    <Audiobook />
    <Critics />
</template>
<style lang="scss" scoped>

</style>