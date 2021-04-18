<template>
    <div class="container">
        <Header></Header>
        <div class="md-layout">
            <div class="md-layout-item">
                <div class="md-layout">
                    <div class="md-layout-item">
                        <div class="md-layout md-alignment-center">
                            <div class="md-layout-item md-size-75">
                                <img class="primaryPic" src="assets/caftan-marocain.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item">
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50">
                                <img class="secondaryPic" src="assets/caftan-marocain.jpg"/>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50">
                                <img class="secondaryPic" src="assets/caftan-marocain.jpg"/>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50">
                                <img class="secondaryPic" src="assets/caftan-marocain.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md-layout-item">
                <div class="md-layout">
                    <div class="md-layout-item primaryText md-headline md-size-75">{{product.name}}</div>
                    <div class="md-layout-item primaryText md-headline md-size-25">{{product.price}}.00€</div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <md-icon>favorite_border</md-icon>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Taille : {{product.size}}</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-30">
                        <md-field>
                            <label>Number</label>
                            <md-input v-model="cart.quantity" min="1" max="5" type="number"></md-input>
                        </md-field>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                        <span>Couleur : {{product.color}}</span>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                       Description :
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item">
                       {{product.description}}
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-35">
                        <md-button @click="addAndRefresh(cart)" class="md-raised md-primary"><md-icon style="color: white;">add</md-icon> Ajouter a mon panier</md-button>
                    </div>
                    <div class="md-layout-item md-size-35">
                        <md-button class="buttonAvis"><md-icon>speaker_notes</md-icon> Voir les avis</md-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-layout similarProducts">
            <div class="md-layout-item">
                <div class="md-layout">
                    <div class="md-layout-item md-title">
                        Produits similaires
                    </div>
                </div>
                <div class="md-layout productImages md-alignment-center-center">
                    <div class="md-layout-item">
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <img src="assets/robe-blanc.jpg" />
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <span>Caftan cuivre</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                1500.00€
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item">
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <img src="assets/robe-bleu-claire.jpg" />
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <span>Caftan bleu clair</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                1500.00€
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item">
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <img src="assets/robe-bleu-claire.jpg" />
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <span>Caftan bleu clair</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                1500.00€
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item">
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <img src="assets/robe-bleu-claire.jpg" />
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                <span>Caftan bleu clair</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item">
                                1500.00€
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
    name: "Product",
    components: {
        Header,
        Footer
    },
    computed: {
        ...mapState({
            product: state => state.product.active
        }),
    },
    data(){
        return{
            cart: {
                quantity: 1,
                user_id: 1,
                product_id: parseInt(this.$route.params.id)
            }
        }
    },
    methods: {
        ...mapActions('product', {
            getProductById: 'getProductById'
        }),
        ...mapActions('cart', {
            addToCart: 'addToCart',
            getCart: 'getCart'
        }),
        addAndRefresh(cart){
            this.addToCart(cart)
            .then(() => {
                this.getCart(cart.user_id)
            })
        }
    },
    beforeMount() {
        this.getProductById(this.$route.params.id)
    },
}
</script>

<style lang="scss" scoped>
    .primaryPic{
        width: 300px;
        height: 400px;
    }
    @supports(object-fit: cover){
        img{
            object-fit: cover;
            object-position: center center;
        }
    }
    .secondaryPic{
        padding-bottom: 5%;
        width: 100px;
        height: 150px;
    }
    @supports(object-fit: cover){
        img{
            object-fit: cover;
            object-position: center center;
        }
    }
    .buttonAvis{
        padding: 5px;
        border: black 1px solid;
    }
    .similarProducts{
        font-family: Fondamento, serif;
        text-align: center;
        background-color: lightgray;
        .md-title{
            padding-top: 3%;
            padding-bottom: 2%;
            font-size: 30px;
        }
        .productImages{
            padding-bottom: 2%;
        }
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
    }
</style>
