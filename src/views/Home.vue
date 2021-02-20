<template>
    <div class="container">
        <Header></Header>
        <carousel class="carouselCollec">
            <slide class="slide slide1">
                <div class="textContainer">
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <span>Nos nouvelles collections</span>
                        </div>
                    </div>
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <md-button class="discoverBtn md-primary">Je les découvre</md-button>
                        </div>
                    </div>
                </div>
            </slide>
            <slide class="slide slide2">
            </slide>
            <slide class="slide slide2">
            </slide>
        </carousel>
        <div class="md-layout md-alignment-center-center">
            <div class="md-layout-item md-size-20 links">
                <span>NOUVELLES COLLECTIONS</span>
            </div>
            <div class="md-layout-item md-size-20 links">PROMOTIONS</div>
        </div>
        <carousel class="carouselProduits story-carousel story-carousel--multiple story-carousel--images">
            <slide class="story-carousel__slide">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <img class="imgCarousel" src="src/assets/caftan-marocain.jpg"/>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Caftan holographique</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>30,99€</span>
                    </div>
                </div>
            </slide>
            <slide class="story-carousel__slide">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <img class="imgCarousel" src="src/assets/caftan-hollographique.jpg"/>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Caftan holographique</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>30,99€</span>
                    </div>
                </div>
            </slide>
            <slide class="story-carousel__slide">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <img class="imgCarousel" src="src/assets/velour.jpg"/>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Caftan holographique</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>30,99€</span>
                    </div>
                </div>
            </slide>
            <slide class="story-carousel__slide">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <img class="imgCarousel" src="src/assets/robe-blanc.jpg"/>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Caftan holographique</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>30,99€</span>
                    </div>
                </div>
            </slide>
            <slide class="story-carousel__slide">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <img class="imgCarousel" src="src/assets/robe-blanc.jpg"/>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Caftan holographique</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>30,99€</span>
                    </div>
                </div>
            </slide>
        </carousel>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
export default {
    name: 'home',
    components: {
        Footer,
        Header,
        Carousel,
        Slide
    },
    computed: {
        ...mapState({
            products: state => state.products
        })
    },
    created() {
        //this.getAllProducts()
    },
    methods: {
        ...mapActions('product', {
            getAllProducts: 'getAllProducts'
        })
    }
}
</script>

<style lang="scss" scoped>
    .carouselCollec{
        width: 100%;
        height: 500px;
    }
    .slide{
        height: 500px;
        font-family: Fondamento, serif;
        color: white;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .textContainer{
            width: 40%;
        }
        .discoverBtn{
            border: 1px solid white;
            padding: 10px;
            border-radius: 15px;
            color: white !important;
            text-decoration: none;
        }
    }
    .slide1{
        background-image: url('../assets/velour.jpg');
        background-position: center center;
        background-repeat:no-repeat;
    }
    .slide2{
        background-image: url('../assets/caftan-hollographique.jpg');
        background-position: center center;
        background-repeat:no-repeat;
    }
    .links{
        text-align: center;
        padding: 30px;
    }
    .story-carousel__slide{
        display: block;
        img{
            padding-bottom: 5%;
            width: 300px;
            height: 400px;
        }
        @supports(object-fit: cover){
            img{
                object-fit: cover;
                object-position: center center;
            }
        }
        .md-layout-item{
            width: 300px;
            font-size: 15px;
            text-align: center;
            font-family: Fondamento,serif;
        }
    }
    .carouselProduits{
        margin-bottom: 10%;
    }
    .story-carousel--multiple {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        .story-carousel__slide {
            flex: 0 0 100%;
            width: 300px;

            @media (min-width: 500px) {
                flex: 0 0 50%;
            }

            @media (min-width: 768px) {
                flex: 0 0 33.33%;
            }

            @media (min-width: 1024px) {
                flex: 0 0 25%;
            }

            @media (min-width: 1280px) and (max-width: 1440px) {
                flex: 0 0 20%;
            }
        }
    }
</style>
