<script>
import Critics from './Critics.vue'
import Author from './Author.vue'
import Sitesbook from './Sitesbook.vue'
import Audiobook from './Audiobook.vue'
import Events from './Events.vue'
export default {
    components: {
        Author,
        Sitesbook,
        Audiobook,
        Critics,
        Events
    }
}
</script>
<template lang="">
    <Author />
    <Sitesbook />
    <Audiobook />
    <Critics />
    <Events />
</template>
<style lang="scss" scoped>

</style>