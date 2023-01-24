<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row margin-auto">
            <div class="col-10">
                <h2>What The Critics Say</h2>
                <h6>TESTIMONIALS FROM AROUND THE WORLD</h6>
            </div>
            <div class="col-2">
                <button>Read All Testimonials</button>
            </div>
        </div>
        <div class="row margin-auto">
            <div class="col-7">
                <div class="card-author">
                    <div class="info-card">
                        <h2>Best Author of His Generation</h2>
                        <hr>
                        <h6>This book will change your perspective on life</h6>
                        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue curcus. In vitae enim quis sem pharestra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue curcus. In vitae enim quis sem pharestra. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <div class="content-nytimes">
                            <img src="../../public/nytimes-logo-white-xsmall.png" alt="nytimes">
                            <span> Justine Kilpatrick, <span class="green">The New York Times</span></span>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="row flex-column align-items-center">
                    <div class="col-12 bg-pink text-center">
                        <div class="text-testimonial">
                            <h4>A True Masterpiece, Bravo!</h4>
                            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.</p>
                        </div>
                        
                    </div>
                    <div class="col-12">
                        <div class="guardian">
                            <img src="../../public/theguardian-xsmall.png" alt="guardian">
                            <span>Gerald Hendley, <a href="#">The Guardian</a></span>
                        </div>
                    </div>
                    <div class="col-12 bg-pink text-center">
                        <div class="text-testimonial">
                            <h4>A Unique View On The World</h4>
                            <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet.</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="globe">
                            <img src="../../public/globe-xsmall.png" alt="globe">
                            <span>Mary Maxey, <a href="#">The Globe And Mail</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;


.margin-auto {
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
        border-radius: 0 0 15% 0;

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

            span {
                font-family: $dm-sans;
                font-size: 1.2rem;

            }

            .green {
                color: $secondary-color;
            }
        }
    }
}

.col-12 {
    width: 90%;


    .text-testimonial {
        width: 100%;
        background-color: $pink-color;
        padding: 12%;


        h4 {
            font-family: $dm-serif-display;
        }

        p {
            font-family: $dm-sans;
            color: grey;
            line-height: 2rem;
            font-size: 1.1rem;
        }
    }

    .guardian,
    .globe {
        margin: 10px 0 30px 0;

        img {
            margin-right: 1.5rem;
        }

        span {
            font-family: $dm-sans;
            color: grey;
            font-size: 1.1rem;
        }

        a {
            text-decoration: none;
            color: black;

            &:hover {
                color: $primary-color;
            }
        }
    }
}
</style>