<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row margin-auto">
            <div class="col-9">
                <h2>Recent Articles</h2>
                <h6>READ THE LATEST ENTRIES</h6>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-end">
                <div class="button d-flex justify-content-end">
                    <button>All Articles</button>
                </div>
            </div>
        </div>
        <div class="row justify-content-between margin-auto">
            <div class="col-8">
                <div class="container-thumb">
                    <div class="img">
                        <img src="../../public/20-Tips-600x353.jpg" alt="20-Tips">
                    </div>
                    <div class="info">
                        <h4><a href="#">20 Creativity Tips</a></h4>
                        <p>By <a href="#">admin</a> | October 24th, 2019|Categories: <a href="#">Event</a>, <a href="#">Tips & Tricks</a></p>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet.</p>
                    </div>
                </div>
            </div>
            <div class="col-3 w-32">
                <div class="row justify-content-evenly height-100">
                    <div class="col-12">
                        <div class="container-card">
                            <div class="bg-img-13">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-12 ">
                        <div class="container-card">
                            <div class="bg-img-08">
                                
                            </div>
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

.container-fluid {
    background-color: $pink-color;

    .margin-auto {
        width: 80%;
        margin: 0 auto;


        .col-9 {

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

        .col-3 {

            button {
                text-align: left;
                padding: 0.7rem 2.5rem;
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
    }
}

.container-thumb,
.container-card {
    background-color: white;
    padding: 2rem;
    font-family: $dm-sans;

    .img {
        img {
            width: 100%;
        }
    }

    .info {
        p {
            color: grey;

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

.container-card {
    width: 100%;
    height: 100%;
}

.row.height-100 {
    height: 100%;
}

.col-12 {

    .bg-img-08,
    .bg-img-13 {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .bg-img-08 {
        background-image: url(../../public/thumb-08-2x-320x202.jpg);
    }

    .bg-img-13 {
        background-image: url(../../public/thumb-13-2x-320x202.jpg);
    }
}

.w-32 {
    width: 32%;
}
</style>