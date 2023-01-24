<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col-9 text-center">
                <div class="author">
                    <h2>More About Damon Vaughn</h2>
                    <p>Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller “The story of my life.”</p>
                    <button class="mt-4">Meet The Author</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container-fluid {
    background-color: white;
}

.row {
    height: 568px;
}

.author {
    h2 {
        font-family: $kristi;
        font-size: 5.7rem;
        color: $primary-color;
    }

    p {
        font-family: $dm-sans;
        font-size: 1.9rem;
    }

    button {
        @include style-btn;
    }
}
</style>