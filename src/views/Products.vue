<template>
    <div class="container">
        <Header></Header>
        <div class="md-layout">
            <div class="md-layout-item md-size-20 filterDiv">
                <div class="md-layout">
                    <div class="primaryText md-layout-item md-headline">
                        Robes Orientales
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-title">
                        Nos robes
                        <md-divider></md-divider>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item filterInput">
                        Abbaya
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item filterInput">
                        Caftan
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item filterInput">
                        Robe djerbienne
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item filterInput">
                        Blousa
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item filterInput">
                        Djebba
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-title">
                        Nos couleurs
                        <md-divider></md-divider>
                    </div>
                </div>
                <div v-bind:key="color" v-for="color in products.colors" class="md-layout">
                    <div class="md-layout-item filterInput">
                        <md-checkbox v-model="search.color" :value="color">{{color}}</md-checkbox>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-title">
                        Nos tailles
                        <md-divider></md-divider>
                    </div>
                </div>
                <div v-bind:key="size" v-for="size in products.sizes" class="md-layout">
                    <div class="md-layout-item filterInput">
                        <md-checkbox v-model="search.size" :value="size">{{size}}</md-checkbox>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-title">
                        Fourchettes de prix
                        <md-divider></md-divider>
                        <vue-material-range-slider :thumbLabel="true" :stepSize="search.stepSize" v-model="search.price" />
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-size-80 productDiv">
                <div class="md-layout">
                    <div v-bind:key="product.id" v-for="product in productsFiltered" class="md-layout-item md-size-25">
                        <div class="md-layout">
                            <div class="md-layout-item text-center">
                                <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item text-center">
                                <span class="secondaryText">{{product.name}}</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item text-center">
                                <span>{{product.price}}.00 €</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item text-center">
                                <md-icon>add_shopping_cart</md-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../includes/Footer.vue";
import Header from "../includes/Header.vue";
import {mapActions, mapState} from "vuex";
export default {
    name: "Products",
    components: {Footer, Header},
    data(){
        return {
            search: {
                size: [],
                color: [],
                price: [0,100],
                stepSize: 1
            }
        }
    },
    computed: {
        ...mapState({
            products: state => state.product
        }),
        productsFiltered(){
            let productsToFilter = [];
            if(Array.isArray(this.$store.state.product.all)) {
                this.$store.state.product.all.filter(product => {
                    if (this.search.color.includes(product.color) || this.search.color.length === 0) {
                        if(this.search.size.includes(product.size) || this.search.size.length === 0) {
                            if (product.price >= this.search.price[0]  && product.price <= this.search.price[1]) {
                                productsToFilter.push(product)
                            }
                        }
                    }
                })
                return productsToFilter
            }
            else{
                return []
            }
        }
    },
    methods: {
        ...mapActions('product', {
            getAllProducts: 'getAllProducts'
        })
    },
    beforeMount() {
        this.getAllProducts()
    }
}
</script>

<style lang="scss" scoped>
.filterDiv{
    padding-right: 15px;
    border-right: 2px solid grey;
    .slider-thumb, .slider-thumb-label, .slider-track-fill{
        background-color: black !important;
    }
    .md-headline{
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .md-title{
        margin-top: 20px;
    }
    .md-divider{
        margin-bottom: 20px;
    }
    .filterInput{
        padding-left: 15%;
    }
}
.productDiv {
    margin-top: 2%;
    .productPic {
        padding-bottom: 5%;
        width: 200px;
        height: 250px;
    }

    @supports (object-fit: cover) {
        img {
            object-fit: cover;
            object-position: center center;
        }
    }
}
</style>
