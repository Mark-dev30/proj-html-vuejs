<script>
import Critics from './Critics.vue'
import Author from './Author.vue'
import Sitesbook from './Sitesbook.vue'
import Audiobook from './Audiobook.vue'
import Events from './Events.vue'
import Newsletter from './Newsletter.vue'
export default {
    components: {
        Author,
        Sitesbook,
        Audiobook,
        Critics,
        Events,
        Newsletter
    }
}
</script>
<template lang="">
    <Author />
    <Sitesbook />
    <Audiobook />
    <Critics />
    <Events />
    <Newsletter />
</template>
<style lang="scss" scoped>

</style>