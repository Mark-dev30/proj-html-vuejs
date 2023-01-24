<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-10">
                <h2>What The Critics Say</h2>
                <h6>TESTIMONIALS FROM AROUND THE WORLD</h6>
            </div>
            <div class="col-2">
                <button>Read All Testimonials</button>
            </div>
        </div>
        <div class="row">
            <div class="col-7 card-author">
                <div class="info-card">
                    <h2>Best Author of His Generation</h2>
                    <hr>
                    <h6>This book will change your perspective on life</h6>
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue curcus. In vitae enim quis sem pharestra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue curcus. In vitae enim quis sem pharestra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>

                </div>
            </div>
            <div class="col-5"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.row {
    width: 75%;
    margin: 0 auto;


    .col-10 {
        padding-top: 5rem;

        h2 {
            font-family: $dm-serif-display;
            font-size: 2.5rem;
            color: black;
        }

        h6 {
            font-family: $dm-sans;
            color: $secondary-color;
            margin-top: 1rem;
        }
    }

    .col-2 {
        padding-top: 5rem;

        button {
            text-align: left;
            padding: 8px 30px;
            border-radius: 7px;
            border: none;
            color: white;
            font-family: $dm-sans;
            background-color: $primary-color;
            font-size: 14px;

            &:hover {
                background-color: #ce971f;
            }
        }
    }

    .card-author {
        background-image: url(../../public/testimonial2-2x.jpg);
        background-size: cover;
        background-repeat: no-repeat;

        .info-card {
            padding: 12%;
            color: white;

            h2 {
                font-family: $dm-serif-display;
                font-size: 2.5rem;
                margin-bottom: 3rem;
            }

            h6 {
                font-size: 1.4rem;
                font-family: $dm-sans;
            }

            p {
                font-family: $dm-sans;
                font-size: 1.1rem;
            }
        }
    }


}
</style>