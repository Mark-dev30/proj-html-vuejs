<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    background-color: $pink-color;

    .row {
        height: 153px;
    }
}
</style>