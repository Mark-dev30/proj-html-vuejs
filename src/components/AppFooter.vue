<script>
export default {
    props: {
        list_footer: Array
    }
}
</script>
<template lang="">
    <!-- Footer -->
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <div class="img-logo">
                        <img src="../assets/author-logo-round-200x205.png" alt="logo">
                    </div>
                </div>
                <!-- Post the columns after checking the array -->
                <div v-for="item in list_footer" class="col-3">
                    <div v-if="item._type === 'paragraph'" class="about-me">
                        <h5>{{item.data.title}}</h5>
                        <p>{{item.data.content}}</p>
                    </div>
                    <div v-else-if="item._type === 'list'" class="useful">
                        <h5>{{item.data.title}}</h5>
                        <ul class="p-0">
                            <li v-for="list in item.data.content">
                                <a href="#">
                                    <i class="fa-solid fa-angle-right"></i>
                                    {{list}}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="contact">
                        <h5>{{item.data.title}}</h5>
                        <ul class="p-0 m-0">
                            <li v-for="list in item.data.content">
                                {{list}}
                            </li>
                        </ul>
                        <span v-for="icon in item.data.icons"><a href="#"><i :class="icon"></i></a></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <div class="copyright">
                        <p>© Copyright 2012 - 2023 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights Reserved | Powered by <a href="#">WordPress</a></p>
                    </div>
                </div>
            </div>
        </div>  
    </footer>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    height: 489px;
    background-image: url(../../public/footer-3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.container-fluid {
    height: 100%;
}

.row:first-child {
    height: 85%;
    padding: 5rem 0 0 1rem;
}

.about-me,
.useful,
.contact,
.copyright {

    h5 {
        text-transform: uppercase;
        font-family: $dm-serif-display;
        color: white;
        margin-bottom: 50px;
        letter-spacing: 3px;
    }

    li,
    p,
    a {
        font-family: $dm-sans;
        color: $grey-color;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    ul,
    p {
        line-height: 31px;
    }
}

.useful {
    i {
        font-size: 13px;
    }
}

.contact {
    i {
        font-size: 17px;
        margin: 20px 20px 0 0;
    }
}
</style>