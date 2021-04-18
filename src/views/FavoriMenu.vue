<template>
    <div class="container">
        <Header/>
        <div class="page-container md-layout-row">
            <md-app>
                <md-app-drawer class="md-transparent osf-background-grey" md-permanent="full" >
                    <md-toolbar class="osf-background-grey" md-elevation="0">
                        <h2 class="titreGeneral"> {{ menu_general.label }}</h2>
                    </md-toolbar>
                    <md-list class="osf-background-grey"  v-if="menu_general.items.length > 0" >
                        <md-list-item v-for="item in menu_general.items"  :key="item.general" >
                            <span class="md-list-item-text"> {{ item.label }} </span>
                        </md-list-item>
                    </md-list>
                </md-app-drawer>


                <md-app-content class="osf-background-grey">
                    <h1 class="titreContent">{{ menu_content.label }}</h1>
                    <div class="md-layout-item md-size-80 productDiv">
                        <div class="md-layout">
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">Caftan OR</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">zzzzz</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">zzzzz</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">zzzzz</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">zzzzz</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25">
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <img class="productPic" alt="product picture" src="src/assets/caftan-marocain.jpg"/>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span class="secondaryText">zzzzz</span>
                                    </div>
                                </div>
                                <div class="md-layout">
                                    <div class="md-layout-item text-center">
                                        <span>00 €</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </md-app-content>
                
            </md-app>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
export default {
    name: "FavoriMenu",
    components: {Footer, Header},
    data() {
    return {
      menu_general: {
        label: 'Profil',
        items: [
          {
            label: 'Mon compte',
          },
          {
            label: 'Mes commandes',
          },
          {
            label: 'Mes artricles favoris',
          },
          {
            label: 'Informations de paiement',
          },  
        ]
      },

      menu_content: {
        label: 'Favoris',
        items: []
      },


    }
  },
    
    

}

</script>

<style lang="scss" scoped>

.md-card {
    box-shadow: unset !important;
}
 .md-app {
    min-height: 700px;
    border: 0px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 300px;
    height: 800px;
  }
.md-list-item-text {
    margin-left: 80px;
    margin-top: 30px;   
}
.titreGeneral {
    margin-left: 60px;
    margin-bottom: 50px;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
}
.titreContent {
    text-align: center;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
}


.osf-background-grey {
    background-color:#f1f1f1 !important;
}

.productDiv {
    margin-top: 2%;
    .productPic {

        padding-bottom: 5%;
        margin-left: 2%;
        width: 140px;
        height: 180px;
    }

    @supports (object-fit: cover) {
        img {
            object-fit: cover;
            object-position: center center;
        }
    }
}
</style>
