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
                    <!-- Menu -->
                    <div class="content-menu">
                        <ul class="d-flex p-0">
                            <!-- Post the list after checking the array -->
                            <li v-for="(item,index) in list" class="d-flex align-items-center" :class="item.active == true ? 'active' : ''">
                                <a  v-if="item._type === 'title'"   href="#">
                                    {{item.data.title}}
                                </a>
                                <a v-else-if="item._type === 'list'" href="#" class="dropdown">
                                    {{item.data.title}}
                                    <i :class="item.data.icon"></i>
                                    <div class="dropdown-menu">
                                        <div v-for="list in item.data.content" class="content-menu d-flex flex-column align-items-center justify-content-center">
                                            <span>
                                                {{list}}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" v-else>
                                    <i :class="item.data.title"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row height-78">
                <div class="col-7">
                    <!-- Info Header -->
                    <div class="content-info mt-4">
                        <h1>Damon Vaughn</h1>
                        <h2>Best-Selling Author And The Most Influential Public Intellectual In The Western World Right Now.</h2>
                        <p>- The New York Times</p>
                    </div>
                </div>
                <!--Latest Book Release -->
                <div class="col-5 d-flex align-items-end p-0">
                    <div class="content-book bg-white p-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-6 ">
                                    <div class="img-book">
                                        <img src="../../public/book-widget.png" alt="book">
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="info-book">
                                        <h4>Latest Book Release</h4>
                                        <h6>D. VAUGHN AUTOBIOGRAPHY</h6>
                                        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Button -->
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
                                        Buy On App Store
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
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.60)), url(../../public/hero-07-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
            font-family: $dm-sans;

            &:hover {
                border-top: 5px solid $primary-color;

                a {
                    color: $primary-color;
                }
            }

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
        line-height: 4rem;
    }

    p {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.5rem;
        color: $grey-color;
        margin-top: 2rem;
    }
}

.img-book {
    img {
        width: 100%;
    }
}

.info-book {

    h4,
    h6 {
        font-family: $dm-serif-display;
    }

    h6 {
        color: $primary-color;
    }

    p {
        font-family: $dm-sans;
    }
}

.height-78 {
    height: 78%;
}

button {
    font-size: 14px;
    padding: 8px 38px;
    background-color: white;
    border: 1px solid $secondary-color;
    border-radius: 5px;

    &:hover {
        background-color: $secondary-color;
        color: white;
    }
}

.active {
    border-top: 5px solid $primary-color;

}

.dropdown {
    position: relative;


    .dropdown-menu {
        background-color: transparent;
        border: none;
        display: none;
        position: absolute;
        top: 20px;

        .content-menu {
            width: 130px;
            height: 50px;
            background-color: black;

            &:hover {
                background-color: $secondary-color;
            }
        }

        span {
            font-family: $dm-sans;
            color: white;
            display: block;
            font-size: 0.8rem;


        }

    }

    &:hover .dropdown-menu {
        display: block;
    }
}
</style>