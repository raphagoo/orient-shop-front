<template>
    <div class="md-content footerContainer">
        <div class="topFooter md-layout md-alignment-top-center md-gutter">
            <div class="md-layout-item md-size-25">
                <img class="logoFooter" src="assets/Logo-blanc.svg" />
            </div>
            <div class="md-layout-item md-size-25">
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">
                        <md-icon style="color: white;">remove</md-icon>
                    </div>
                    <div class="md-layout-item md-title">
                        &nbsp;Informations
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        <router-link to="/about">A propos de nous</router-link>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Nous contacter
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Livraison
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Politique de confidentialité
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Conditions générales de vente
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Mentions légales
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item">
                        Paiement
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-size-25">
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">
                        <md-icon style="color: white;">remove</md-icon>
                    </div>
                    <div class="md-layout-item md-title">
                        &nbsp;Nous retrouver sur :
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-size-5">

                    </div>
                    <div class="md-layout-item md-size-10">
                        <md-icon style="color: white;">facebook</md-icon>
                    </div>
                    <div class="md-layout-item md-size-10">
                        <md-icon style="color: white;">photo_camera</md-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-layout copyrightLayout md-alignment-center-center">
            <div class="md-layout-item text-center"><md-icon class="text-white">copyright</md-icon> Orient'shop - Tous droits réservés - 2021</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
.footerContainer{
    padding-top: 10%;
    background-color: black;
    color: white;
    .topFooter{
        padding-bottom: 5%;
        .md-layout{
            padding: 5px 0 5px 0;
            .text-white{
                color: white !important;
            }
            .text-center{
                text-align: center;
            }
        }
    }
    .logoFooter{
        max-width:250px;
        max-height: 200px;
    }
    .copyrightLayout{
        padding: 15px 0 50px 0;
        .text-white{
            color: white !important;
        }
        .text-center{
            text-align: center;
        }
    }
    .md-title{
        font-family: Fondamento, serif;
    }
}
</style>
