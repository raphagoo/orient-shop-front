<template>
  <div>
    <md-toolbar class="md-dense">
        <div class="md-toolbar-section-start">
                  <md-button class="md-icon-button" >
                    <md-icon style="color:white">keyboard_arrow_down</md-icon>
                  </md-button>

                  <md-button style="color:white">Où est mon colis ?</md-button>

                </div>
        <div class="md-toolbar-section-end">
          <md-button v-if="!loggedIn" class="md-accent md-raised" >
                <router-link to="/login">Connexion</router-link>
            </md-button>
            <md-button v-if="!loggedIn" class="md-accent md-raised">
                <router-link to="/register">Inscription</router-link>
            </md-button>
            <md-button class="md-accent md-raised" v-if="loggedIn" v-on:click="logoutUser">
                Se déconnecter
            </md-button>
           <md-button class="md-layout-item md-size-10">
                <md-icon style="color: white;">facebook</md-icon>
            </md-button>
            <md-button class="md-layout-item md-size-10">
                <md-icon style="color: white;">instagram</md-icon>
            </md-button>
        </div>
    </md-toolbar>

    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start md-layout-item md-size-45">
          <md-button  class="md-icon-button">
            <md-icon style="color:black">search</md-icon>
          </md-button>
        </div>

        <div  class="md-layout-item md-size-10">
            <router-link to="/shop"><img class="logoHeader" src="assets/Logo-dégradé.svg" /></router-link>
        </div>
        <div class="md-layout-item md-size-25"></div>

        <div v-if="loggedIn" class="md-toolbar-section-end md-layout-item md-size-20">
          <md-button class="md-icon-button">
            <md-icon style="color:black"><router-link v-if="loggedIn" to="/profil/favori"><md-icon style="color:black">favorite_border</md-icon></router-link></md-icon>
          </md-button>

          <md-button class="md-icon-button" >
            <router-link v-if="loggedIn" to="/profil"><md-icon style="color:black">account_circle</md-icon></router-link>
              <router-link v-if="!loggedIn" to="/login"><md-icon style="color:black">account_circle</md-icon></router-link>
          </md-button>

            <md-badge :md-content="cartLength">
                <md-button @click="dialog = true" class="md-icon-button">
                    <md-icon style="color:black;">shopping_basket</md-icon>
                </md-button>
            </md-badge>
            <md-dialog :md-active.sync="dialog">
                <md-dialog-title class="text-center"><md-icon class="md-size-2x" style="color: #8b3b1c">shopping_basket</md-icon></md-dialog-title>
                <md-dialog-content>
                    <div class="md-layout productNb">
                        <div class="md-layout-item text-center md-title">
                            {{cartLength}} produit(s) dans votre panier
                        </div>
                    </div>
                    <div class="md-layout toPay">
                        <div class="md-layout-item text-center">
                            Montant à payer : {{cartPrice}} €
                        </div>
                    </div>
                </md-dialog-content>
                <md-dialog-actions>
                    <md-button class="md-primary see-cart" @click="goToCart">Voir mon panier</md-button>
                    <PayPal
                        :amount="cartPrice"
                        currency="EUR"
                        :client="paypal">
                    </PayPal>
                </md-dialog-actions>
            </md-dialog>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset" style="float:center">
          <div class="second-navbar-button" style="float:center">
            <router-link to="/products"><md-button class="nav-button">ROBE ORIENTALE</md-button></router-link>
            <md-button class="nav-button">ROBE SOIREE</md-button>
            <md-button class="nav-button">ACCESSOIRE</md-button>
            <md-button class="nav-button">HIJAB</md-button>
            <md-button class="nav-button">TURBAN</md-button>
            <md-button class="nav-button">CHAUSSURES</md-button>
            <md-button class="nav-button">CONFECTION SUR-MESURE</md-button>
            <md-button class="nav-button">INFORMATION</md-button>

          </div>

      </div>
    </md-toolbar>
  </div>
</template>



<style lang="scss" scoped>

.second-navbar-button {
    margin: auto;
    padding: 20px;
}
.md-button.button-second-navbar{
    color: black;
}

.md-toolbar.md-theme-default {
    background-color: #8b3b1c;
    color: white;
}
.md-dense {
    color: white im !important;
    padding: auto;
}
.md-large {
    box-shadow: 0 0px 0px ;
}
.md-layout{
    padding: 5px 0 5px 0;
}
.md-toolbar.md-theme-default.md-primary {
    background-color:white;
}
.logoHeader{
    max-width: 150px;
    max-height: 150px;
}
.nav-button {
    color: black !important;
    font-family: Fondamento,serif;
    font-weight: bold;
}
.md-dialog-container {
    background-color: grey !important;
    .toPay {
        margin-top: 5%;
        background-color: #8b3b1c;
        color: white;
    }
    .see-cart{
        margin-bottom: 14px;
    }
}





</style>
<script>
import { mapState, mapActions } from 'vuex'
import PayPal from 'vue-paypal-checkout'

export default {
  name: 'Header',
  components: {PayPal},
  data(){
      return {
          dialog: false,
          paypal: {
              sandbox: 'AX1z8yH71OZf-3wo6wOv9WL7hLXjf57Cu8Z6Q5Hgop2ILNt2aOAZB-ClvGx5JbvdwfvmTDYv3e15M3Dn',
              production: 'AcpNqNJKWqPO16zq6r6inYTfGP7TPkJ49BdbW05YeW0fkAomVyjhiOjB4faiUIy3c2IlWn5Wq93bKygx'

          }
      }
  },
  computed: {
      ...mapState('user', ['status']),
      loggedIn () {
          return this.$store.state.user.status.loggedIn;
      },
      ...mapState({
          cart: state => state.cart.all
      }),
      cartLength(){
          return this.$store.state.cart.all.length
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
      ...mapActions('user', ['logout']),
      logoutUser() {
        this.logout()
      },
      goToCart(){
          this.$router.push('/cart');
      }
  }
}
</script>
