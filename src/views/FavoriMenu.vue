<template>
        <div class="container">
            <Header/>
            <div class="container md-layout osf-background-grey">
                <div class="md-layout-item md-size-20 test" >
                    <sidebar-profil></sidebar-profil>
                </div>
                <div class="md-layout-item md-size-80" style="padding: 3rem;">
                    <h1 class="titreContent">{{ menu_content.label }}</h1>
                    <div class="container" >
                        <div class="md-layout-item md-size-80">
                            <div class="md-layout">
                                <div class="md-layout-item md-size-25 test" >
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
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

</template>

<script>
import Header from "../includes/Header.vue";
import Footer from "../includes/Footer.vue";
import SidebarProfil from "../includes/SidebarProfil.vue";
export default {
    name: "FavoriMenu",
    components: {Footer, Header, SidebarProfil},
    data() {
    return {
      menu_content: {
        label: 'Mes articles favoris',
        items: []
      },
    }
  },
}

</script>

<style lang="scss" scoped>
.osf-background-grey {
    background-color:#f1f1f1 !important;
}
.titreContent {
    text-align: center;
    margin-top: 50px;
    color: #8b3b1c ;
     font-family: Fondamento, serif;
}


.productDiv {
    margin-top: 20%;
}
    .productPic {
        width: 100px;
        height: 150px;
    }

.secondaryText {
  padding: 0%;
}


</style>
