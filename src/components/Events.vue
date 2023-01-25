<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="title text-center">
                    <h2>Upcoming Events</h2>
                    <h3>MEET THE AUTHOR IN PERSON</h3>
                </div>
            </div>
        </div>
        <div class="row margin-auto justify-content-evenly">
            <div class="col-3 p-0">
                <div class="card-img">
                    <img src="../../public/event-05-400x240.jpg" alt="event-05">
                    <div class="overlay"></div>
                </div>
                <div class="card-info text-center">
                    <h3><a href="#">Chicago Book Signing</a></h3>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.</p>
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="card-img">
                    <img src="../../public/event-04-400x240.jpg" alt="event-04">
                    <div class="overlay"></div>
                </div>
                <div class="card-info text-center">
                    <h3><a href="#">Meet & Greet With Amanda</a></h3>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas.</p>
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="card-img">
                    <img src="../../public/event-07-400x240.jpg" alt="event-07">
                    <div class="overlay"></div>
                </div>
                <div class="card-info text-center">
                    <h3><a href="#">Open Book: Dialogues</a></h3>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    background-color: $pink-color;
    padding-bottom: 6rem;

    .title {
        margin: 5rem 0 3rem 0;

        h2 {
            font-family: $dm-serif-display;
            font-size: 2.5rem;

        }

        h3 {
            font-family: $dm-sans;
            color: $primary-color;
            font-size: 1.2rem;
            margin-top: 1rem;
        }
    }
}

.margin-auto {
    width: 90%;
    margin: 0 auto;
}

.col-3 {
    width: 320px;
    background-color: white;

    .card-img {
        position: relative;

        img {
            width: 100%;


            &:hover .overlay {
                opacity: 1;
            }

        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.3);
            opacity: 0;
            top: 0;
            left: 0;
            transition: 1s;

            &:hover {
                opacity: 1;
            }
        }
    }

    .card-info {
        padding: 3rem 3rem 1rem 3rem;

        h3,
        p {
            font-family: $dm-sans;
        }

        h3 {
            a {
                text-decoration: none;
                color: black;

                &:hover {
                    color: $primary-color;
                }
            }
        }

        p {
            color: grey;
            font-size: 1.1rem;
        }
    }
}
</style>