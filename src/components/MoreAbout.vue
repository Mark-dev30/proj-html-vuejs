<script>
export default {

}
</script>
<template lang="">
   <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="title text-center">
                    <h2>Dig A Little Deeper Into Damon Vaughn</h2>
                    <h3>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h3>
                </div>
            </div>
        </div>
        <div class="row margin-auto justify-content-evenly">
            <div class="col-3 p-0"> 
                <div class="card-aboutme">
                    <div class="card-info text-center">
                        <h3>About Me</h3>
                        <hr>
                        <p>Vestibulum ante ipsum primis</p>
                    </div>
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="card-latestbook">
                    <div class="card-info text-center">
                        <h3>My Latest Book</h3>
                        <hr>
                        <p>Vestibulum ante ipsum primis</p>
                    </div>
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="card-booksigning">
                    <div class="card-info text-center">
                        <h3>Book Signing</h3>
                        <hr>
                        <p>Vestibulum ante ipsum primis</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    padding-bottom: 6rem;

    .title {
        margin: 5rem 0 3rem 0;

        h2 {
            font-family: $dm-serif-display;
            font-size: 2.5rem;

        }

        h3 {
            font-family: $dm-sans;
            color: $secondary-color;
            font-size: 1.2rem;
            margin-top: 1rem;
        }
    }
}

.margin-auto {
    width: 85%;
    margin: 0 auto;
}

.col-3 {
    width: 310px;

    .card-aboutme {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(../../public/box-1.jpg);
        background-position: top left;
    }

    .card-latestbook {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(../../public/box-4.jpg);
    }

    .card-booksigning {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(../../public/box-3.jpg);
    }

    .card-aboutme,
    .card-latestbook,
    .card-booksigning {
        border-radius: 0 0 15% 0;
        transition: transform .30s;

        &:hover {
            transform: scale(1.02);
            box-shadow: rgba(80, 80, 88, 0.5) 0px 7px 29px 0px;
        }
    }

    .card-info {
        padding: 19rem 2.5rem 1.5rem 2.5rem;

        h3,
        p {
            font-family: $dm-sans;
        }

        h3 {
            color: white;
            font-size: 2rem;
        }

        p {
            color: $primary-color;
            font-size: 1.1rem;
        }

        hr {
            width: 50px;
            border: 1.5px solid white;
            border-radius: 2px;
            margin: 1rem auto;
        }
    }
}
</style>