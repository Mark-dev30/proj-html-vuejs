<script>
export default {

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row  justify-content-center">
            <div class="col-4 d-flex justify-content-center align-items-end">
                <img src="../../public/audible-app-2x-400x418.png" alt="audible-app">
            </div>
            <div class="col-4 text-center d-flex align-items-center">
                <div class="info-audiobook ">
                    <h2>New Audiobook</h2>
                    <h6>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</h6>
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-fluid {
    background-image: url(../../public/banner.jpg);
    background-size: cover;
    background-position: bottom;
    height: 450px;

    .row {
        width: 100%;
        height: 100%;


        .col-4 {
            img {
                width: 90%;
            }

            .info-audiobook {
                margin-bottom: 3rem;
                padding: 0 24px;

                h2 {
                    font-family: $dm-serif-display;
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                }

                h6 {
                    font-family: $dm-sans;
                    color: $primary-color;
                    letter-spacing: 2px;
                    margin-bottom: 2rem;
                    line-height: 1.5rem;
                }

                p {
                    color: $grey-color;
                    font-size: 1.1rem;
                    line-height: 1.5rem;
                }
            }
        }
    }
}
</style>