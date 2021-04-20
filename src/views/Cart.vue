<template>
    <div class="container">
        <Header/>
        <div class="md-layout md-alignment-top-center backgroundCart">
            <div class="md-layout-item">
                <div class="md-layout md-alignment-top-center">
                    <div class="md-layout-item md-size-50">
                        <div v-bind:key="product.id" v-for="product in cartItems" class="md-layout">
                            <div class="md-layout-item productContainer">
                                <div class="md-layout md-alignment-center-center">
                                    <div class="md-layout-item md-size-20">
                                        <img alt="product image" src="assets/caftan-rouge.jpg">
                                    </div>
                                    <div class="md-layout-item md-size-40">
                                        <div class="md-layout">
                                            <div class="md-layout-item">
                                                <span class="md-title primaryText">{{product.name}}</span>
                                            </div>
                                        </div>
                                        <div class="md-layout">
                                            <div class="md-layout-item">
                                                <span>Taille {{product.size}}</span>
                                            </div>
                                        </div>
                                        <div class="md-layout productLayout">
                                            <div class="md-layout-item md-body-2">
                                                <span>{{product.price}}€</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-10">
                                        <div class="vl"></div>
                                    </div>
                                    <div class="md-layout-item md-size-30">
                                        <div class="md-layout md-alignment-center-center">
                                            <div class="md-layout-item">
                                                <md-button class="md-raised md-primary">Continuer mon shopping</md-button>
                                            </div>
                                        </div>
                                        <div class="md-layout">
                                            <div class="md-layout-item">
                                                <md-button @click="remove(product)" class="md-raised md-primary">Supprimer l'article</md-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item text-center paymentOptions md-size-50">
                        <div class="md-layout md-alignment-center-center">
                            <div class="md-layout-item md-size-60 paypalContainer">
                                <PayPal
                                    :amount="cartPrice"
                                    currency="EUR"
                                    :client="paypal">
                                </PayPal>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-60 md-title priceContainer">
                                <span>Montant total à régler : {{cartPrice}}€</span>
                            </div>
                        </div>
                        <div class="md-layout">
                            <div class="md-layout-item text-center md-size-40 inputPromo">
                                <md-field>
                                    <label for="promo">Avez-vous un chèque cadeau ?</label>
                                    <md-input name="promo" id="promo" type="text"  />
                                </md-field>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import {mapActions, mapState} from "vuex";
import PayPal from 'vue-paypal-checkout'
export default {
    name: "Cart",
    components: {Header, Footer, PayPal},
    data(){
        return {
            paypal: {
                sandbox: 'AX1z8yH71OZf-3wo6wOv9WL7hLXjf57Cu8Z6Q5Hgop2ILNt2aOAZB-ClvGx5JbvdwfvmTDYv3e15M3Dn',
                production: 'AcpNqNJKWqPO16zq6r6inYTfGP7TPkJ49BdbW05YeW0fkAomVyjhiOjB4faiUIy3c2IlWn5Wq93bKygx'

            },
        }
    },
    computed: {
        ...mapState({
            cart: state => state.cart.all
        }),
        cartItems(){
            return this.$store.state.cart.all
        },
        cartPrice(){
            let totalPrice = 0
            this.$store.state.cart.all.forEach(product => {
                totalPrice = totalPrice + product.price
            })
            return totalPrice.toString()
        }
    },
    methods: {
        ...mapActions('cart', {
            removeFromCart: 'removeFromCart'
        }),
        remove(product){
            let cartInfos = {
                user_id: this.$store.state.user.user.id,
                product_id: product.id
            }
            this.removeFromCart(cartInfos)
        }
    }
}
</script>

<style lang="scss" scoped>
.productContainer{
    background-color: white;
    padding: 30px;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
    img{
        max-width: 120px;
        max-height: 170px;
    }
    .productLayout{
        margin-top: 30%;
    }
    .vl {
        border-left: 2px solid lightgrey;
        height: 150px;
    }
}
.paymentOptions {
    margin-top: 50px;
    .paypalContainer{
        background-color: #8b3b1c;
        padding: 10px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
    }
    .priceContainer {
        background-color: darkgrey;
        color: white;
        padding: 10px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }

    .inputPromo {
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
