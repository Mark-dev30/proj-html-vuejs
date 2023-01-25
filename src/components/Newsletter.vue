<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-5">
                <div class="info text-center">
                    <h2>Subscribe To My Newsletter</h2>
                    <h6>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h6>
                    <input type="text" placeholder="Insert your email ...*" class="me-3">
                    <button>Subscribe</button>
                    <p class="mt-5">Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(../../public/banner-2.jpg);
    background-size: cover;
    background-position: center;

    .info {
        font-family: $dm-sans;
        padding: 6rem;

        h2 {
            font-family: $dm-serif-display;
            color: white;
            font-size: 2.4rem;
        }

        h6 {
            color: $primary-color;
            margin: 2rem 0;
        }

        input {
            padding: 1rem;
            border: none;
            border-radius: 5px;
        }

        p {
            color: grey;
            font-size: 1.1rem;
        }

        button {
            font-size: 1rem;
            padding: 1rem 1.5rem;
            border-radius: 7px;
            border: none;
            color: white;
            font-family: $dm-sans;
            background-color: $secondary-color;

            &:hover {
                background-color: #367d64;
            }

        }
    }
}
</style>