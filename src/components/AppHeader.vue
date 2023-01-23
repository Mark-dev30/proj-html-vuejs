<script>
export default {
    props: {
        list: Array,
    },
    methods: {

    },
}
</script>
<template lang="">
    <!-- Header -->
    <header>
        <div class="container-fluid">
            <div class="row height-22">
                <div class="col-4">
                    <div class="content-img">
                        <img src="../assets/author-logo-round-small.png" alt="logo">
                    </div>
                </div>
                <div class="col-8 d-flex">
                    <div class="content-menu">
                        <ul class="d-flex p-0">
                            <li v-for="(item,index) in list" class="d-flex align-items-center">
                                <a v-if="index == 5 " href="#">
                                    {{item}}
                                    <i class="fa-solid fa-chevron-down"></i>
                                </a>
                                <a v-else-if="index == 7" href="#">
                                    <i class="fa-solid fa-cart-shopping"></i></a>
                                <a href="#" v-else>{{item}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row height-78">
                <div class="col-7">
                    <div class="content-info mt-4">
                        <h1>Damon Vaughn</h1>
                        <h2>Best-selling author and the most influential public intellectual in the western world right now.</h2>
                        <p>- The New York Times</p>
                    </div>
                </div>
                <div class="col-5 d-flex align-items-end">
                    <div class="content-book bg-white p-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 padding-20">
                                    <div class="img-book">
                                        <img src="../../public/book-widget.png" alt="book">
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="info-book">
                                        <h4>Latest Book Release</h4>
                                        <h6>D. VAUGHN AUTOBIOGRAPHI</h6>
                                        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-6">
                                    <button>
                                        <i class="fa-brands fa-amazon"></i>
                                        Buy On Amazon
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button>
                                        <i class="fa-brands fa-apple"></i>
                                        Buy On AppStore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

/* Header */
header {
    width: 100%;
    height: 643px;
    background-image: url(../../public/hero-07-2x.jpg);
    background-size: contain;
    background-repeat: no-repeat;
}

.container-fluid {
    height: 100%;

    .height-22 {
        height: 22%;
    }
}

/* Content-img */
.content-img {
    width: 100%;

    img {
        width: 140px;
        margin-left: 53px;
    }
}

.content-menu {
    width: 100%;

    ul {
        height: 100%;
        width: 100%;
        gap: 10px;

        li {
            list-style-type: none;
            margin-right: 30px;

            a {
                text-decoration: none;
                color: white;
            }
        }
    }
}

.content-info {
    margin-left: 140px;

    h1 {
        font-family: 'Kristi', cursive;
        font-size: 5.5rem;
        color: $primary-color;
    }

    h2 {
        font-family: 'DM Serif Display', serif;
        font-size: 3rem;
        color: white;
    }

    p {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.5rem;
        color: white;
    }
}

.img-book {
    img {
        width: 100%;
    }
}

.height-78 {
    height: 78%;
}

button {
    font-size: 13px;
    padding: 8px 38px;
    background-color: white;
    border: 1px solid $secondary-color;
    border-radius: 5px;
}
</style>